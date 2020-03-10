import { addElement } from "./addElement.js";
import { locationBlock } from "./locationBlock.js";
import { getWeatherData } from "./weatherSearch.js";
import { resetState } from "./resetState.js";
import { showError } from "./showError.js";

const getLocationData = zipCode => {
  const htmlError = {
    content: null,
    id: "t-location-error",
    kind: "div",
    parent: "t-nimg",
    theClass: "error"
  };

  function handleLocationResponse(data) {
    if (data && !data.error_code) locationBlock();
    if (data && data.error_code >= 400) {
      htmlError.content = data.error_msg;
      addElement(htmlError);
    }
    const city = document.getElementById("t-location-city");
    const state = document.getElementById("t-location-state");
    if (data.city) {
      city.innerHTML = data.city;
      state.innerHTML = data.state;
      getWeatherData(data.zip_code);
    }
  }

  // const path = `http://localhost:3001/location/${zipCode}`;
  const path = `https://sj-weather.herokuapp.com/location/${zipCode}`;
  fetch(path)
    .then(res => res.json())
    .then(data => handleLocationResponse(data))
    .catch(error => {
      if (
        error.responseText &&
        (json = JSON.parse(error.responseText, null, 4)) &&
        json.error_msg
      ) {
        htmlError.content = json.error_msg;
        addElement(htmlError);
      } else {
        htmlError.content =
          "The request failed for some reason. It appears that request URL does not exist or you are not connected to the internet.";
        addElement(htmlError);
      }
    });
};

// SEARCH INPUT
let isShowSearchCancelButton = false;
let searchInputState = "";

const addEventListenerToResetButton = () => {
  const resetSearchInput = document.getElementById("t-reset");
  resetSearchInput.addEventListener("click", () => {
    searchInput.disabled = false;
    searchInput.value = "";
    searchInputState = "";
    resetState();
  });
};

const addSearchResetButton = () => {
  const span = document.createElement("span");
  span.className = "reset";
  span.id = "t-reset";
  span.innerHTML = "&times;";
  document.getElementById("t-search").appendChild(span);
  addEventListenerToResetButton();
};

const searchInput = document.getElementById("t-zipCodeInput");
searchInput.addEventListener("keyup", e => {
  if (searchInputState.length === 5 && e.keyCode !== 8) {
    searchInputState = searchInputState;
    showError("charLimit");
  } else if ((e.keyCode > 47 && e.keyCode < 58) || e.keyCode === 8) {
    searchInputState = e.target.value;
  } else {
    showError("charIllegal");
  }
  searchInput.value = searchInputState;
  if (searchInputState.length > 0) {
    isShowSearchCancelButton = true;
  } else if (searchInputState.length === 0) {
    isShowSearchCancelButton = false;
  }
  if (searchInputState.length === 5) {
    searchInput.disabled = true;
    getLocationData(searchInputState);
  }
  if (isShowSearchCancelButton && !document.getElementById("t-reset")) {
    addSearchResetButton();
  }
  if (!isShowSearchCancelButton && document.getElementById("t-reset")) {
    resetState();
  }
});
