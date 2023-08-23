const ulEl = document.querySelector("#categories");
const liEl = ulEl.querySelectorAll(".item");
const quantityItem = ulEl.getElementsByClassName("item").length;

console.log(`Number of categories: ${quantityItem}`);

liEl.forEach(element => {
    const h2El = element.querySelector("h2").textContent;
    const quantityEl = element.querySelectorAll("ul li").length;
        
    console.log(`Category: ${h2El}`);
    console.log(`Elements: ${quantityEl}`); 
});
