function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = document.querySelector('.change-color');
const span = document.querySelector('.color');


const onBodyColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  if (document.body.style.backgroundColor = getRandomHexColor()) {
    span.textContent = getRandomHexColor();
    span.style.color = 'white';
  }
}

color.addEventListener("click", onBodyColor);