import React, { createContext } from "react";
import { useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [clima, setClima] = useState({
    city: "",
    country: "",
  });

  const [time, setTime] = useState({});

  const [show, setShow] = useState(false);

  const handleApi = async (city, country) => {
    const ApiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`;

    const respuesta = await fetch(url);

    const Weather = await respuesta.json();

    const { main, weather } = Weather;

    const { temp_max, temp_min, humidity } = main;
    const [{ description }] = weather;

    const Time = {
      Temp_max: temp_max,
      Temp_min: temp_min,
      Humidity: humidity,
      Description: description,
    };

    setTime(Time);
    setShow(true);
  };

  return (
    <AppContext.Provider
      value={{
        clima,
        time,
        show,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
