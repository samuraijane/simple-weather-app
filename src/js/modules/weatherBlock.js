const weatherBlock = () => {
  const ul = document.createElement("ul");
  ul.className = "weather";
  ul.id = "t-weather";
  ul.innerHTML = `
    <li>
      <h2>General Conditions</h2>
      <div id="t-weather-description"></div>
    </li>
    <li>
      <h2>Feels Like</h2>
      <div id="t-weather-feelsLike"></div>
    </li>
    <li>
      <h2>Humidity</h2>
      <div id="t-weather-humidity"></div>
    </li>
    <li>
      <h2>Temperature</h2>
      <div id="t-weather-temp"></div>
    </li>
    <li>
      <h2>High</h2>
      <div id="t-weather-tempHigh"></div>
    </li>
    <li>
      <h2>Low</h2>
      <div id="t-weather-tempLow"></div>
    </li>
    <li>
      <h2>Wind</h2>
      <div id="t-weather-wind"></div>
    </li>
  `;
  document.getElementById("t-home").append(ul);
};

export { weatherBlock };
