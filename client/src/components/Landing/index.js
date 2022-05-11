import React, { useState } from "react";
import { Link } from "react-router-dom";


const Landing = () => {
  let logout;

  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex  min-100-vh">
      <div className="container flex-column text-center">
        <h1 className="m-0 text-dark" style={{ fontSize: "3rem" }}>
          FARMERCO PTY.
        </h1>
        <p className="m-0" style={{ fontSize: "1.4rem", fontWeight: "700" }}>
          {" "}
          Where all farmers go!
        </p>

        <div>
       
          <Link className="btn btn-lg btn-dark m-2" to="/signup">
            Get Started!
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Landing;
