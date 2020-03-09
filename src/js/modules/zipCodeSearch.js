import { addElement } from "./addElement.js";
import { locationBlock } from "./locationBlock.js";
import { getWeatherData } from "./weatherSearch.js";
import { resetState } from "./resetState.js";
import { showError } from "./showError.js";
import { ZIP_CODE_API_KEY } from "./apiKeys.js";

const getLocationData = zipCode => {
  const htmlError = {
    content: null,
    id: "t-location-error",
    kind: "div",
    parent: "t-nimg",
    theClass: "error"
  };

  function handleZipCodeResponse(data) {
    const city = document.getElementById("t-location-city");
    const state = document.getElementById("t-location-state");
    if (data.city) {
      city.innerHTML = data.city;
      state.innerHTML = data.state;
      getWeatherData(data.zip_code);
    }
  }

  const baseUrl = "http://www.zipcodeapi.com/rest";
  const path = `${baseUrl}/${ZIP_CODE_API_KEY}/info.json/${zipCode}/radians`;
  fetch(path)
    .then(response => {
      if (response.status === 200) locationBlock();
      if (response.status === 404) {
        htmlError.content =
          "The zip code you entered does not exist. Please try your search again.";
        addElement(htmlError);
      }
      return response.json();
    })
    .then(data => {
      handleZipCodeResponse(data);
    })
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
