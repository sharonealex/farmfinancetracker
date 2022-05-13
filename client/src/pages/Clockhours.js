import React, { useState } from "react";
import { Link } from "react-router-dom";
//mport { clockHours } from '../utils/api';

const ClockHours = () => {
  const d = new Date();

  const [clockIn, setClockIn] = useState(false);
  const clockOut = () => {};

  return (
    <main className="clockhours bg-clockhours flex-row justify-center mb-4">
      <div className="clockhours col-12 col-lg-12 flex-row justify-center">
        <div className="punch-card flex-column justify-center align-center">
          <h1>Good Day, Thoms</h1>
          <p>
            Time Now:{" "}
            {d.getDate() +
              "/" +
              d.getMonth() +
              "/" +
              d.getFullYear() +
              " " +
              d.getHours() +
              ":" +
              d.getMinutes()}
          </p>
          <div className="usr-img"></div>
          <div className="flex-row">
          <button className="btn btn-lg btn-dark m-2" onClick={clockOut}>
            Clock In
          </button>
          <button className="btn btn-lg btn-dark m-2" onClick={clockOut}>
            Clock Out
          </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClockHours;
