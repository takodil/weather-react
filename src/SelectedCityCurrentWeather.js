import React from "react";
import "./SelectedCityCurrentWeather.css";

export default function SelectedCityCurrentWeather(props) {
  return (
    <div className="col-6 main">
      <p id="weather-description">{props.desc}</p>
      <div className="row today">
        <div className="col-8 main">
          <div className="weather-temperature">
            <img id="selected-weather-icon" src={props.icon} alt="Sunny" />
            <br />
            <strong className="temp" id="current-temp">
              {props.temp}
            </strong>
            <span className="units">
              <a href="#" id="celcius-link" className="active">
                °C
              </a>{" "}
              |
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
