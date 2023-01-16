import headerFunc from "./header.js";

//! add product to localStorage
async function getData() {
  const photos = await fetch("../e-commerce/js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
}

getData();

const products = localStorage.getItem("products");
console.log(JSON.parse(products));
