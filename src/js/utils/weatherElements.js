import convertToF from "./convertToF.js";
import setWind from "./setWind.js";

const weatherElements = data => {
  const contentMap = {
    conditions: data.weather.weather[0].description,
    feelsLike: `${Math.round(convertToF(data.weather.main.feels_like))}&deg; F`,
    humidity: `${data.weather.main.humidity}%`,
    icon: data.weather.weather[0].icon,
    location: {
      city: data.location.city,
      state: data.location.state,
      zip: data.location.zip_code
    },
    temp: `${Math.round(convertToF(data.weather.main.temp))}&deg; F`,
    tempHigh: `${Math.round(convertToF(data.weather.main.temp_max))}&deg; F`,
    tempLow: `${Math.round(convertToF(data.weather.main.temp_min))}&deg; F`,
    wind: setWind(data.weather.wind.speed, data.weather.wind.deg)
  };

  const elements = [
    {
      content: contentMap.location.city,
      parentId: "t-location-city"
    },
    {
      content: contentMap.conditions,
      parentId: "t-weather-conditions"
    },
    {
      content: contentMap.feelsLike,
      parentId: "t-weather-feelsLike"
    },
    {
      content: contentMap.humidity,
      parentId: "t-weather-humidity"
    },
    {
      content: `http://openweathermap.org/img/wn/${contentMap.icon}@2x.png`,
      parentId: "t-weather-icon"
    },
    {
      content: contentMap.temp,
      parentId: "t-weather-temp"
    },
    {
      content: contentMap.tempHigh,
      parentId: "t-weather-high"
    },
    {
      content: contentMap.tempLow,
      parentId: "t-weather-low"
    },
    {
      content: contentMap.wind,
      parentId: "t-weather-wind"
    }
  ];

  return elements;
};

export default weatherElements;
