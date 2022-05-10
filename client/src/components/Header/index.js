import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  
   let logout; 

  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex  min-100-vh">
      <div className="container flex-column text-center">
        <h1 className="m-0 text-dark" style={{ fontSize: "3rem" }}>
          FarmerCo Pty.
        </h1>
        <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
          {" "}
          Where all farmers go
        </p>
        <div>
          {false ? (
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
