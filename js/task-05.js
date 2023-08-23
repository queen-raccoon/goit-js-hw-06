const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) =>
    {
    inputName.value === ("")
        ? outputName.textContent = "Anonymous"
        : outputName.textContent = event.currentTarget.value.trim();
});