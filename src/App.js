import './App.css';
// import ForcastGroup from "./ForcastGroup";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Weather />
            <hr />
            {/* <ForcastGroup /> */}
          </div>
        </div>
        <p>Hosted by Netlify</p>
        <p>
          GitHub repo can be found
          <a href="https://github.com/takodil/weather-shecodes">here</a>
        </p>
      </div>
    </div>
  );
}
