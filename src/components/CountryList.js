import React from "react";
import Country from "./Country";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

export default function CountryList() {
  const { countries, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="section">
      <div className="countries-center">
        {countries.length > 0 ? (
          countries.map((item) => {
            return <Country key={item.alpha3Code} {...item} />;
          })
        ) : (
          <h2 className="section-title">
            no countries matched your search criteria
          </h2>
        )}
      </div>
    </section>
  );
}
