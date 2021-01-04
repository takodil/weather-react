import React from "react";
import "./CitySearchForm.css";

export default function CitySearchForm() {
  return (
    <div className="row">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="search-input mb-3"
            id="city-search-input"
            placeholder="Type a city..."
          />
          <i className="fas fa-search" id="search-button"></i>
          <button id="my-location-button">My Location</button>
        </div>
      </form>
    </div>
  );
}
