const path = "../views";
const views = {
  about: {
    id: "t-main",
    onInit: false,
    url: `${path}/main/about.html`
  },
  footer: {
    id: "t-footer",
    onInit: true,
    url: `${path}/footer`
  },
  header: {
    id: "t-header",
    onInit: true,
    url: `${path}/header`
  },
  home: {
    id: "t-main",
    onInit: true,
    url: `${path}/main/home.html`
  }
};

window.onload = () => {
  Object.keys(views).forEach(view => {
    const theView = views[view];
    if (theView.onInit) getView(theView.id, theView.url);
  });
};

const getView = (id, url) => {
  const el = document.getElementById(id);
  const ajax = new XMLHttpRequest();
  ajax.open("GET", url, false);
  ajax.send();
  el.innerHTML = ajax.responseText;
};

const load = page => {
  const view = views[page];
  getView(view.id, view.url);
};
