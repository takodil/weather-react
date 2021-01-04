import React, {useState} from "react";
import axios from "axios";
import SubSelectedCityTemp from "./SubSelectedCityTemp";
import SelectedCityInformation from "./SelectedCityInformation";
import SelectedCityCurrentWeather from "./SelectedCityCurrentWeather";
import "./Weather.css"


export default function Weather(props){
    let [city, setCity] = useState("Paris");
    let [searchedCityTemp, setSearchedCityTemp] = useState("");
    let [searchedCityName, setSearchedCityName] = useState("");
    let [searchedCityHumidity, setSearchedCityHumidity] = useState("");
    let [searchedCityWind, setSearchedCityWind] = useState("");
    let [searchedCityFeelsLike, setsearchedCityFeelsLike] = useState("");
    let apiKey = "211e843ea737bc5c3e45b740358e30e3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    function handleResponse(response) {
      setSearchedCityName(response.data.name);
      setSearchedCityTemp(response.data.main.temp);
      setSearchedCityHumidity(response.data.main.humidity);
      setsearchedCityFeelsLike(response.data.main.feels_like);
      setSearchedCityWind(response.data.wind.speed);
    }
    function showTemp(event) {
      event.preventDefault();
      if (city.length > 0) {
        axios.get(apiUrl).then(handleResponse);
      } else {
        alert("Please enter city name.");
      }
    }
    function handleSearch(event) {
      setCity(event.target.value);
    }
    return (
      <div>
        <div className="row" onSubmit={showTemp}>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="search-input mb-3"
                id="city-search-input"
                placeholder="Type a city..."
                onChange={handleSearch}
              />
              <button>Search</button>
              {/* <button id="my-location-button">My Location</button> */}
            </div>
          </form>
        </div>
        <div className="row today">
          <SelectedCityInformation
            cityName={searchedCityName}
            cityDay="Sunday"
            cityDate="06.12"
            cityTime="18:00"
          />
          <SelectedCityCurrentWeather
            desc="Cloudy"
            icon="http://openweathermap.org/img/wn/50n@2x.png"
            temp={searchedCityTemp}
          />
          <SubSelectedCityTemp
            wind={searchedCityWind}
            humidity={searchedCityHumidity}
            feelsLike={searchedCityFeelsLike}
          />
        </div>
      </div>
    );
}