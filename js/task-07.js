const getIdControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

const changeTextSize = () => {
  const fontSizeValue = getIdControl.value + 'px';
  textSize.style.fontSize = fontSizeValue;
};

getIdControl.addEventListener("input", changeTextSize);
