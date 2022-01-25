import React, { useContext } from "react";
import "./styles/App.css";
import { AppContext } from "./context/WeatherContext";
import AppContextProvider from "./context/WeatherContext";

//Components
import Header from "./Components/Header";

const App = () => {
  return (
    <AppContextProvider>
      <div className="app">
        <Header />
      </div>
    </AppContextProvider>
  );
};

export default App;
