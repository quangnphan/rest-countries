import React from "react";
import { useGlobalContext } from "../context";

export default function SearchForm() {
  const { setSearchTerm, setRegion } = useGlobalContext();
  const regions = [
    { name: "Africa", desc: "Africa" },
    { name: "Americas", desc: "Americas" },
    { name: "Asia", desc: "Asia" },
    { name: "Europe", desc: "Europe" },
    { name: "Oceania", desc: "Oceania" },
  ];
  const searchValue = React.useRef("");
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCountry() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleFilter(e) {
    setRegion(e);
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCountry}
            placeholder="search for a country..."
          />
        </div>
        <div className="filter">
          <select
            name="select"
            value={regions.name}
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option hidden disabled>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Polar">Polar</option>
          </select>
        </div>
      </form>
    </section>
  );
}
