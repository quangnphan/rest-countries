import React from "react";
import CountryList from "../components/CountryList";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context";

export default function Home(){
    const {theme} = useGlobalContext()
    return(
        <main className={`${theme==="light mode" ? "dark" : "light"}`}>
            <SearchForm />
            <CountryList />
        </main>
    )
}