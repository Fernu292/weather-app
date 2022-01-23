import React, { Fragment, useState } from "react";

const Cuestionario = ({ setClima, handleApi }) => {
  const [busqueda, setBusqueda] = useState({
    city: "",
    country: "",
  });

  const [error, setError] = useState(false);
  const { city, country } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city === "" || country === "") {
      setError(true);
    } else {
      setClima({
        busqueda,
      });

      handleApi(city, country);
      setError(false);
    }
  };

  const handleChange = (e) => {
    //actualizar state
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <div className="cuestionario">
        <h1>Check your weather</h1>
        {error ? <p className="error"> All fields are required</p> : null}
        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                value={country}
                onChange={handleChange}
              >
                <option>--Select your country--</option>
                <option value="US">USA</option>
                <option value="Francia">Francia</option>
                <option value="CA">Canada</option>
                <option value="MX">Mexico</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={handleChange}
              />
            </div>

            <button>Check Weather</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Cuestionario;
