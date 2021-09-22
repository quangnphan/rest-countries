import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
export default function Navbar() {
  const { theme, setTheme } = useGlobalContext();
  const handleClick = (e) => {
      e.preventDefault()
      if(theme === "light mode"){
        setTheme("dark mode")
      }else{
        setTheme("light mode")
      }
  }
  return (
    <nav className={`navbar ${theme==="light mode" ? "dark" : "light"}`}>
      <div className="nav-width">
        <Link to="/" className="logo">
          Where in the world?
        </Link>
        <button onClick={handleClick} className="btn-dark">{theme}</button>
      </div>
    </nav>
  );
}
