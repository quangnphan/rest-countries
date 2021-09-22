import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://restcountries.eu/rest/v2/name/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [countries, setCountries] = useState([]);
  const [region,setRegion] = useState([])
  const [theme,setTheme] = useState("dark mode")

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      setCountries(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  const fetchFilter = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
      const data = await response.json();
      setCountries(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [region]);

  useEffect(() => {
    fetchCountries();
  }, [searchTerm, fetchCountries]);
  
  useEffect(()=>{
    fetchFilter()
  },[region,fetchFilter])
  
  return (
    <AppContext.Provider
      value={{ loading, countries, searchTerm, setSearchTerm,setRegion,theme,setTheme}}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
