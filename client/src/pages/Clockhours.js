import React, { useState } from "react";
import { Link } from "react-router-dom";
//mport { clockHours } from '../utils/api';

const ClockHours = () => {

  const date = new Date();

  const [startTime, setStartTime] = useState("00:00");
  const [finishTime, setFinishTime] = useState("00:00");
  const [startMessage, setStartMessage] = useState("");
  const [finishMessage, setFinishMessage] = useState("");

  const handleClickIn = ()=>{
    setStartTime(date.getHours().toString());
    console.log(`starting hours: ${startTime}`);
    setStartMessage(`you have clocked in at ${startTime}:00 hours, Thank you!`)
  };

  const handleClickOut = ()=>{
    setFinishTime(date.getHours().toString());
    console.log(`finishing hours: ${finishTime}`);
    setFinishMessage(`you have clocked out at ${finishTime}:00 hours, Thank you!`)
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
          <div className="usr-img"></div>
          <div className="flex-row">
          <button className="btn btn-lg btn-dark m-2" onClick={handleClickIn}>
            Clock In
          </button>
          <p>{startMessage}</p>
          <button className="btn btn-lg btn-dark m-2" onClick={handleClickOut}>
            Clock Out
          </button>
          <p>{finishMessage}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClockHours;
