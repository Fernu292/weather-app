import React, { createContext } from "react";
import { useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [time, setTime] = useState({});
  const ApiKey = process.env.API_KEY;

  useEffect(() => {
    const handleApi = async (city, country) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`;
      const response = await fetch(url);

      const weather = await response.json();
      console.log(weather);
      setTime(weather);
    };

    handleApi("Chicoloapan", "MX");
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        time,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
