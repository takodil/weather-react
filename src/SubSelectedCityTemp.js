import React from "react";

export default function SubSelectedCityTemp(props) {
  return (
    <div className="col-6 subsection">
      <h3>Wind</h3>
      <p id="current-wind">{props.wind} km/h</p>
      <br />
      <h3>Humidity</h3>
      <p id="current-humidity">{props.humidity}%</p>
      <br />
      <h3>Feels like</h3>
      <p id="current-feels-like">{props.feelsLike}°</p>
    </div>
  );
}
