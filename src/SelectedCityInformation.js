import React from "react";

export default function SelectedCityInformation(props) {
  return (
    <div>
      <h1 id="city-name">{props.cityName}</h1>
      <h2 id="current-time">
        {props.cityDay}, {props.cityDate} {props.cityTime}
      </h2>
    </div>
  );
}
