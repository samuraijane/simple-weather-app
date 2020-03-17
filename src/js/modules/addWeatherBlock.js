const addWeatherBlock = () => {
  const section = document.createElement("section");
  section.className = "weather";
  section.id = "t-weather";
  section.innerHTML = `
    <div data-title="Conditions" id="t-weather-conditions"></div>
    <div data-title="Temp" id="t-weather-temp"></div>
    <div data-title="Feels Like" id="t-weather-feelsLike"></div>
    <div data-title="At a Glance" id="t-weather-icon"></div>
    <div data-title="Wind" id="t-weather-wind"></div>
    <div data-title="City" id="t-location-city"></div>
    <div data-title="High" id="t-weather-high"></div>
    <div data-title="Low" id="t-weather-low"></div>
    <div data-title="Humidity" id="t-weather-humidity"></div>
  `;
  document.getElementById("t-nimg").append(section);
};

export default addWeatherBlock;
