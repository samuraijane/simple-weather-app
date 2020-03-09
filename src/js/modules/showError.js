import { addElement } from "./addElement.js";
import { removeElement } from "./removeElement.js";

const showError = type => {
  const typeMap = {
    charIllegal: "Only numbers are allowed.",
    charLimit: "You can enter up to 5 digits only."
  };

  const htmlError = {
    content: typeMap[type],
    id: "t-location-error",
    kind: "div",
    parent: "t-nimg",
    theClass: "error"
  };
  addElement(htmlError);
  setTimeout(() => {
    removeElement("t-location-error");
  }, 2500);
};

export { showError };
