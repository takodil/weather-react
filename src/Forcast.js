import React from "react";
import "./Forcast.css";

export default function Forcast(props) {
  return (
    <div className="col-2">
      <h3>{props.time}</h3>
      <img src={props.img} alt="weather"/>
      <div className="weather-forecast-temp">
        <strong>{props.maxTemp}</strong>|{props.minTemp}°
      </div>
    </div>
  );
}
