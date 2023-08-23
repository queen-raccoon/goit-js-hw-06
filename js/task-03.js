const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulElement = document.querySelector(".gallery");

const renderList = (arr) => {
  const markup = arr
    .map(
      ({ url, alt }) => `<li class=js-title3><h2>${alt}</h2></li><li class=js-styleLiEl3><img src=${url} alt=${alt} class=js-img3></li>`
    )
    .join("");
  ulElement.insertAdjacentHTML("beforeend", markup);
};

renderList(images);


