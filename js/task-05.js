const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) =>
    {
    outputName.textContent = inputName.value === ("") 
        ? "Anonymous"
        : event.currentTarget.value.trim();
});

