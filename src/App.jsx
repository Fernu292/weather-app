import React, { useState, useContext } from "react";
import { AppContext } from "./context/WeatherContext";
import AppContextProvider from "./context/WeatherContext";
//Components

const App = () => {
  return (
    <AppContextProvider>
      <div className="app">
        <h1>Weather App</h1>
      </div>
    </AppContextProvider>
  );
};

export default App;
