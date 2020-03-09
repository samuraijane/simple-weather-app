import { removeElement } from "./removeElement.js";

const resetState = () => {
  const elementsWithValues = ["t-zipCodeInput"];
  const elementsToRemove = [
    "t-location",
    "t-location-error",
    "t-reset",
    "t-weather",
    "t-weather-icon"
  ];

  elementsWithValues.forEach(element => {
    document.getElementById(element).value = "";
  });

  elementsToRemove.forEach(element => {
    removeElement(element);
  });
};

export { resetState };
