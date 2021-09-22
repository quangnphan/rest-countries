import React from "react";
import { Link } from "react-router-dom";
const Country = ({ flag, name, alpha3Code, population, region, capital }) => {
  return (
    <Link to={`country/${alpha3Code}`}>
      <article className="country">
        <div className="img-container">
          <img src={flag} alt={name} />
        </div>
        <div className="country-footer">
          <h3>{name}</h3>
          <h4>Population: <span>{population.toLocaleString()}</span></h4>
          <h4>Region: <span>{region}</span></h4>
          <h4>Capital: <span>{capital}</span></h4>
        </div>
      </article>
      </Link>
  );
};
export default Country;
