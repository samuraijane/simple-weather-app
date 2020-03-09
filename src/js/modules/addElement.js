const addElement = element => {
  const { content, id, image, kind, parent, prepend, theClass } = element;
  const el = document.createElement(kind);
  el.className = theClass;
  el.id = id;
  if (kind === "img") el.src = image;
  el.innerHTML = content;
  if (prepend) {
    document.getElementById(parent).prependChild(el);
  } else {
    document.getElementById(parent).appendChild(el);
  }
};

export { addElement };

// `element` is an object with the following properties
//    – content: string
//    – id: string
//    – image: string
//    – kind: string
//    – parent: string
//    – prepend: boolean
//    – theClass: string
