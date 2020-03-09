import { addElement } from "./addElement.js";
import { locationBlock } from "./locationBlock.js";
import { WEATHER_API_KEY } from "./apiKeys.js";
import { weatherBlock } from "./weatherBlock.js";

// HANDLE WEATHER REPONSE
const handleWeatherResponse = data => {
  const kToF = kelvin => {
    return (kelvin - 273.15) * (9 / 5) + 32;
  };

  const setWindSpeedandDirection = (speed, degrees) => {
    const theSpeed = speed * 2.237;
    const directions = [
      "North",
      "Northeast",
      "East",
      "Southeast",
      "South",
      "Southwest",
      "West",
      "Northwest",
      "North"
    ];
    const compassSection = Math.round(degrees / 45);
    let theDirection = directions[compassSection + 1];
    if (speed > 1 && compassSection) {
      return `${Math.round(
        speed
      )} miles per hour coming from the ${theDirection}`;
    } else {
      return "Little or no wind at the moment.";
    }
  };

  if (data.main.temp) {
    const description = document.getElementById("t-weather-description");
    const feelsLike = document.getElementById("t-weather-feelsLike");
    const humidity = document.getElementById("t-weather-humidity");
    const temp = document.getElementById("t-weather-temp");
    const tempHigh = document.getElementById("t-weather-tempHigh");
    const tempLow = document.getElementById("t-weather-tempLow");
    const wind = document.getElementById("t-weather-wind");
    description.innerHTML = data.weather[0].description;
    feelsLike.innerHTML = `${Math.round(kToF(data.main.feels_like))}&deg;`;
    humidity.innerHTML = data.main.humidity;
    temp.innerHTML = `${Math.round(kToF(data.main.temp))}&deg;`;
    tempHigh.innerHTML = `${Math.round(kToF(data.main.temp_max))}&deg;`;
    tempLow.innerHTML = `${Math.round(kToF(data.main.temp_min))}&deg;`;
    wind.innerHTML = setWindSpeedandDirection(data.wind.speed, data.wind.deg);
  }
  if (data.main.temp && data.weather[0].icon) {
    const htmlImage = {
      content: null,
      id: "t-weather-icon",
      image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      kind: "img",
      parent: "t-nimg",
      theClass: "weather-icon"
    };
    addElement(htmlImage);
  }
};

const getWeatherData = area => {
  const htmlError = {
    content: null,
    id: "t-location-error",
    kind: "div",
    parent: "t-nimg",
    theClass: "error"
  };

  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
  const path = `${baseUrl}${area},us&appid=${WEATHER_API_KEY}`;
  fetch(path)
    .then(response => {
      if (response.status === 200) weatherBlock();
      if (response.status === 404) {
        htmlError.content =
          "Something went wrong. Please contact an administrator.";
        addElement(htmlError);
      }
      return response.json();
    })
    .then(data => {
      handleWeatherResponse(data);
    })
    .catch(error => {
      htmlError.content =
        "Well this is odd. You will need to contact IT to find out what's up.";
      addElement(htmlError);
    });
};

export { getWeatherData };
