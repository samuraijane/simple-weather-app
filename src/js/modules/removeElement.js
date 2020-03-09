const removeElement = element => {
  const isInDom = document.getElementById(element);
  if (isInDom) document.getElementById(element).remove();
};

export { removeElement };
