const path = "../views";
const views = {
  about: {
    id: "t-main",
    onInit: false,
    scriptSrc: null,
    url: `${path}/main/about.html`
  },
  footer: {
    id: "t-footer",
    onInit: true,
    scriptSrc: null,
    url: `${path}/footer`
  },
  header: {
    id: "t-header",
    onInit: true,
    scriptSrc: null,
    url: `${path}/header`
  },
  home: {
    id: "t-main",
    onInit: true,
    scriptSrc: "../js/modules/zipCodeSearch.js",
    url: `${path}/main/home.html`
  }
};

window.onload = () => {
  Object.keys(views).forEach(view => {
    const theView = views[view];
    if (theView.onInit) getView(theView);
  });
};

const getView = view => {
  const el = document.getElementById(view.id);
  const ajax = new XMLHttpRequest();
  ajax.open("GET", view.url, false);
  ajax.send();
  el.innerHTML = ajax.responseText;
  if (view.scriptSrc && view.scriptSrc.length > 0) loadScript(view.scriptSrc);
};

const loadScript = script => {
  const theScript = document.createElement("script");
  theScript.src = script;
  theScript.type = "module";
  theScript.async = true;
  theScript.onload = () => console.log("theScript is loaded");
  document.body.appendChild(theScript);
};

const load = page => {
  const view = views[page];
  getView(view.id, view.url);
};
