import './App.css';
// import Weather from "./Weather.js"
import CitySearchForm from "./CitySearchForm";
import SelectedCity from "./SelectedCity";
import ForcastGroup from "./ForcastGroup";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <CitySearchForm />
            <SelectedCity />
            <hr />
            <ForcastGroup />
          </div>
        </div>
        <p>Hosted by Netlify</p>
        <p>
          GitHub repo can be found
          <a href="https://github.com/takodil/weather-shecodes" target="_blank">
            here
          </a>
        </p>
      </div>
    </div>
  );
}
