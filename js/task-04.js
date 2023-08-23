const divId = document.querySelector("#counter");
const valueEl = document.querySelector("#value"); 
const buttonElTake = document.querySelector('button[data-action="decrement"]');
const buttonElAdd = document.querySelector('button[data-action="increment"]');
let counterValue = 0;



buttonElAdd.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

buttonElTake.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});
