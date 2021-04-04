import React from "react";
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div id="error">
      <main>
        <h1>Page not found.</h1>
        <h2>Oooops seems like your lost.</h2>
        <Link to="/">Take me back to safety!</Link>
      </main>
    </div>
  );
}

export default Error;