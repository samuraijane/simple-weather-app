import addElement from "./addElement.js";
import createChildProps from "./../utils/createChildProps.js";
import weatherElements from "./../utils/weatherElements.js";
import addWeatherBlock from "./addWeatherBlock.js";

const addStructure = data => {
  const htmlError = {
    content: null,
    id: "t-location-error",
    kind: "div",
    parent: null,
    theClass: "error"
  };

  if (data.error) {
    htmlError.content = data.message;
    htmlError.parent = document.getElementById("t-nimg");
    addElement(htmlError);
  } else if (data.weather.main.temp) {
    addWeatherBlock();
    weatherElements(data).forEach(weatherElement => {
      const child = createChildProps(weatherElement);
      addElement(child);
    });
  }
};

export default addStructure;
