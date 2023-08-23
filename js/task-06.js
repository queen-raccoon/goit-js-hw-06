const getIdValidationInput = document.querySelector("#validation-input");
const getDataInput = document.querySelector('[data-length="6"]');

const getColorInput = (event) => {
    const checkQuantitySymbol = event.currentTarget.value;

    // checkQuantitySymbol.length === parseInt(getDataInput.dataset.length)
    // ? getIdValidationInput.classList.add("valid")
    // : getIdValidationInput.classList.add("invalid")

    if (checkQuantitySymbol.length === parseInt(getDataInput.dataset.length)) {
        getIdValidationInput.classList.add("valid");
        getIdValidationInput.classList.remove("invalid");
    } else {
        getIdValidationInput.classList.add("invalid");
        getIdValidationInput.classList.remove("valid");
    }
}

getIdValidationInput.addEventListener("blur", getColorInput);
