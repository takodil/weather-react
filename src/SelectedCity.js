import React from "react";
import SubSelectedCityTemp from "./SubSelectedCityTemp";
import SelectedCityInformation from "./SelectedCityInformation";
import SelectedCityCurrentWeather from "./SelectedCityCurrentWeather";

export default function SelectedCity() {
  return (
    <div className="row today">
      <SelectedCityInformation
        cityName="Berlin"
        cityDay="Sunday"
        cityDate="06.12"
        cityTime="18:00"
      />
      <SelectedCityCurrentWeather
        desc="Cloudy"
        icon="http://openweathermap.org/img/wn/50n@2x.png"
        temp={9}
      />
      <SubSelectedCityTemp wind={16} humidity={20} feelsLike={1} />
    </div>
  );
}
