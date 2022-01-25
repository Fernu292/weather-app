import React from "react";
import PropTypes from "prop-types";



const Clima = () => {
  return (
    <>
      <div>
        <h2>Clima today</h2>
      </div>
    </>
  );
};

Clima.propTypes = {
  busqueda: PropTypes.object.isRequired,
  time: PropTypes.object.isRequired,
};
export default Clima;
