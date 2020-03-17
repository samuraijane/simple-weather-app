const createChildProps = data => {
  const parent = document.getElementById(data.parentId);
  let content = data.content;
  let image = null;
  let kind = "div";
  let theClass = "";
  if (data.parentId == "t-weather-icon") {
    content = null;
    image = data.content;
    kind = "img";
    theClass = "weather-icon";
  }
  return {
    content,
    id: "",
    image,
    kind,
    parent,
    prepend: false,
    theClass,
    title: parent.getAttribute("data-title")
  };
};

export default createChildProps;
