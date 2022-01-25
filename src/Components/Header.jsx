import React, { useContext } from "react";
import Navigation from "./Navigation";
import "../styles/components/Header.scss";
import { AppContext } from "../context/WeatherContext";

const Header = () => {
  return (
    <header className="hero">
      <div className="container">
        <div>
          <h1>Weather App</h1>
        </div>
        <div>
          <input type={"text"} placeholder="Your City" />
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
