import addElement from "./addElement.js";
import addStructure from "./addStructure.js";
import loading from "./loading.js";
import resetState from "./resetState.js";
import removeElement from "./removeElement.js";
import showError from "./showError.js";
import Api from "./../../api/index.js";

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
    const api = new Api(searchInputState);
    addElement(loading);
    api.getData().then(data => {
      removeElement("t-loading-notification");
      addStructure(data);
    });
  }
  if (isShowSearchCancelButton && !document.getElementById("t-reset")) {
    addSearchResetButton();
  }
  if (!isShowSearchCancelButton && document.getElementById("t-reset")) {
    resetState();
  }
});
