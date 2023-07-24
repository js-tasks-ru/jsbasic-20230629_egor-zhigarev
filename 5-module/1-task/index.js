function hideSelf() {
  const element = document.querySelector('button');
  element.addEventListener("click", () => element.setAttribute("hidden", true));
}
