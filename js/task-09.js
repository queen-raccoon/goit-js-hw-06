const getClassDiv = document.querySelector(".widget");
const findBackColor = getClassDiv.querySelector(".color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () => {
  const color = getRandomHexColor();
  findBackColor.textContent = color;
  body.style.backgroundColor = color;
}

getClassDiv.addEventListener("click", changeColor);