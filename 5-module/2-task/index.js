function toggleText() {
  const element = document.querySelector('button');
  const text = document.querySelector('div');
  element.addEventListener("click", () => text.toggleAttribute('hidden'));
}
