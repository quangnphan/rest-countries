import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <section className="error-page section wrapper">
      <div className="error-container">
        <h1>Error! Go back to home page.</h1>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  );
}