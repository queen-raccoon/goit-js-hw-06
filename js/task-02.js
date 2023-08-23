const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const quantityIndredients = document.querySelector("#ingredients");
const newLiEl = ingredients
  .map(item => `<li class="item">${item}</li>`)
  .join("");

quantityIndredients.insertAdjacentHTML("beforeend", newLiEl);