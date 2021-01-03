import React from "react";
import Forcast from "./Forcast";
import "./ForcastGroup.css";

export default function ForcastGroup() {
  return (
    <div className="row weather-forecast">
      <Forcast
        time="09:00"
        img="http://openweathermap.org/img/wn/01n@2x.png"
        maxTemp={20}
        minTemp={10}
      />
      <Forcast
        time="10:00"
        img="http://openweathermap.org/img/wn/01n@2x.png"
        maxTemp={25}
        minTemp={15}
      />
      <Forcast
        time="11:00"
        img="http://openweathermap.org/img/wn/01n@2x.png"
        maxTemp={20}
        minTemp={18}
      />
      <Forcast
        time="12:00"
        img="http://openweathermap.org/img/wn/01n@2x.png"
        maxTemp={20}
        minTemp={17}
      />
      <Forcast
        time="13:00"
        img="http://openweathermap.org/img/wn/01n@2x.png"
        maxTemp={21}
        minTemp={18}
      />
    </div>
  );
}
