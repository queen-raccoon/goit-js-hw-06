const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const quantityIndredients = document.querySelector("#ingredients");

ingredients.forEach(element => {
  const liEl = document.createElement('li');
  liEl.classList.toggle("item");
  liEl.textContent = element;
  quantityIndredients.insertAdjacentElement('beforeend', liEl);
  }
);
  
