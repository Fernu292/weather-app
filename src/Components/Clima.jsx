import React from "react";
import PropTypes from "prop-types";

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

const Clima = ({ busqueda, time }) => {
  const { city, country } = busqueda;

  const { Temp_max, Temp_min, Humidity, Description } = time;

  const temp_max = (Temp_max - 273.15).toPrecision(4);
  const temp_min = (Temp_min - 273.15).toPrecision(4);

  const description = capitalize(Description);

  return (
    <div className="clima-container">
      <h1>The weather in {`${city}, ${country}`} is</h1>

      <div className="clima">
        <h3>Max temperature: {temp_max} 'C</h3>
        <h3>Min temperature: {temp_min} 'C</h3>
        <h4>Humidity: {Humidity}</h4>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

Clima.propTypes = {
  busqueda: PropTypes.object.isRequired,
  time: PropTypes.object.isRequired,
};
export default Clima;
