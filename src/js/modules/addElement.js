const addElement = element => {
  const {
    content,
    id,
    image,
    kind,
    parent,
    prepend,
    theClass,
    title
  } = element;

  const insertToDom = (el, heading) => {
    parent.className = "weather-card";
    if (title) {
      parent.appendChild(heading);
    }
    if (prepend) {
      parent.prependChild(el);
    } else {
      parent.appendChild(el);
    }
  };

  const insertErrorToDom = el => {
    el.innerHTML = content;
    parent.appendChild(el);
  };

  const el = document.createElement(kind);
  el.className = theClass;
  el.id = id;

  if (kind === "img") el.src = image;
  if (title) {
    const heading = document.createElement("h2");
    heading.innerHTML = title;
    el.innerHTML = content;
    insertToDom(el, heading);
  }
  if (theClass === "error" || theClass === "loading") insertErrorToDom(el);
};

export default addElement;

// `element` is an object with the following properties
//    – content: string (required)
//    – id: string (optional)
//    – image: string (optional)
//    – kind: string (optional)
//    – parent: DOM element (required)
//    – prepend: boolean (optional)
//    – theClass: string (optional)
//    – title: string (required for divs, optional for images)
