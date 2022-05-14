import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClockMessage from './ClockMessage'
import { saveHours } from '../utils/api';
import Auth from '../utils/auth';


const ClockHours = () => {

  const date = new Date();
  

  const [startTime, setStartTime] = useState(date.getHours().toString());
  const [finishTime, setFinishTime] = useState(date.getHours().toString());
  const [startMessage, setStartMessage] = useState("");
  const [finishMessage, setFinishMessage] = useState("");
  const [disableButtonIn, setdisableButtonIn] = useState(false);
  const [disableButtonOut, setdisableButtonOut] = useState(false);


  const handleClickIn = (event)=>{
    event.preventDefault();
    event.stopPropagation() 
    setdisableButtonIn(true)
    console.log(`starting hours: ${startTime}`);
    setStartMessage(`you have clocked in at ${startTime}:00 hours, Thank you!`)
    saveHours(Auth.getProfile(),startTime);
  };

  const handleClickOut = (event)=>{
    event.preventDefault();
    event.stopPropagation() 
    setdisableButtonOut(true)
    console.log(`finishing hours: ${finishTime}`);
    setFinishMessage(`you have clocked out at ${finishTime}:00 hours, Thank you!`)
    saveHours(Auth.getProfile(),finishTime)
  }

  return (
    <main className="clockhours bg-clockhours flex-row justify-center mb-4">
      <div className="clockhours col-12 col-lg-12 flex-row justify-center">
        <div className="punch-card flex-column justify-center align-center">
          <h1>Good Day, Thoms</h1>
          <p>
            Time Now:{" "}
            {date.getDate() +
              "/" +
              date.getMonth() +
              "/" +
              date.getFullYear() +
              " " +
              date.getHours() +
              ":" +
              date.getMinutes()}
          </p>
         <ClockMessage
         startTime={startTime}
         finishTime={finishTime}
         handleClickIn={handleClickIn}
         handleClickOut={handleClickOut}
         startMessage={startMessage}
         finishMessage={finishMessage}
         disableButtonIn={disableButtonIn}
         disableButtonOut={disableButtonIn}
         />
        </div>
      </div>
    </main>
  );
};

export default ClockHours;
