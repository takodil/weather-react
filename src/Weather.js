import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";


export default function Weather(props){
    function handleResponse(response){
        alert(
          `The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}° C`
        );
    }
    let apiKey = "211e843ea737bc5c3e45b740358e30e3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div>
        <Loader
          type="Puff"
          color="orange"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
        <h2>Hello from Weather</h2>
      </div>
    );
}