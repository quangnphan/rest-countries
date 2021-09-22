import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = 'https://restcountries.eu/rest/v2/alpha/';

export default function SingleCountry() {
  const { code } = useParams();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCountry = async () => {
      try {
        const res = await fetch(`${url}${code}`);
        const data = await res.json();
        setCountry(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCountry();
  }, [code]);
  if (loading) {
    return <Loading />;
  }
  if (!country.name) {
    return <h2>no data found</h2>;
  }
  return (
    <section className="section wrapper">
      <Link className="back-btn" to="/">
        back
      </Link>
      <div className="single-country">
        <div className="img">
          <img src={country.flag} alt={country.name}></img>
        </div>
        <div className="country-info">
          <h3>{country.name}</h3>
          <div className="info-flex">
            <div className="firstdiv">
              <p>
                <span>Native Name:</span> {country.nativeName}
              </p>
              <p>
                <span>Population:</span> {country.population}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              <p>
                <span>Sub Region:</span> {country.subregion}
              </p>
              <p>
                <span>Capital:</span> {country.capital}
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain:</span> {country.topLevelDomain}
              </p>
              <p>
                <span>Currencies:</span>
                {country.currencies.map((currency) => {
                  return <> {currency.name}</>;
                })}
              </p>
              <p>
                <span>Languages:</span>
                {country.languages.map((language) => {
                  return <> {language.name}</>;
                })}
              </p>
            </div>
          </div>
          <p className="border">
            <span>Border Countries:</span>
            {country.borders.map((border, index) => {
              return (
                <Link
                  className="border-btn"
                  key={index}
                  to={`/country/${border}`}
                >
                  {border}
                </Link>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
