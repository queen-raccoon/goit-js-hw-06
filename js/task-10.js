 const getDivControls = document.querySelector("#controls");
const inputEl = getDivControls.getElementsByTagName("input");
const buttonCreate = getDivControls.querySelector("[data-create]");
const buttonDestroy = getDivControls.querySelector("[data-destroy]");
const getDivBoxes = document.querySelector("#boxes");


const createBoxes = (amount) => {
  
  
};

getDivControls.addEventListener("click", createBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

