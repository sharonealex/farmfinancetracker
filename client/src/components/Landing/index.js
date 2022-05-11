import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import SignUp from "../../pages/SignUp";
import Login from "../../pages/Login";

const Landing = () => {
  

  const [modalIsOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

 
  const customStyles = {
    content: {
      backgroundColor: "#ccae62",
      top: "48%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10%"
    },
  };

  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex  min-100-vh">
      <div className="container flex-column text-center">
        <h1 className=".bg-info m-0 text-dark" style={{ fontSize: "3rem" }}>
          FARMERCO PTY.
        </h1>
        <p className="m-0" style={{ fontSize: "1.4rem", fontWeight: "700" }}>
          {" "}
          Where all farmers go!
        </p>

        <div className="container flex-row text-center justify-center">
          <div>
            <button className="btn btn-lg btn-dark m-2" onClick={openModal}>
              Get Started
            </button>
            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              onRequestClose={closeModal}
            >
              <button onClick={closeModal}>x</button>
              <Login />
            </Modal>
          </div>

      
        </div>
      </div>
    </header>
  );
};

export default Landing;
