import { randomAdjective } from "../../utils/adjectives.js";

const locationBlock = () => {
  const random = randomAdjective();
  const div = document.createElement("div");
  div.className = "location";
  div.id = "t-location";
  div.innerHTML = `Welcome to ${random} <span id="t-location-city"></span>, <span id="t-location-state"></span>!`;
  document.getElementById("t-home").prepend(div);
};

export { locationBlock };
