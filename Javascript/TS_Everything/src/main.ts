import { createHtml } from "./htmlHelpers";
import { IProduct } from "./models/IProduct";
import { Person } from "./models/Person";
import "./style.css";

// Object
const p = new Person("Sebastian", 45, true, 165);
const wife = new Person("Hanna", 44, true, 165);

console.log(p);

// Arrays/Listor
const persons: Person[] = [];

persons.push(p);
persons.push(wife);

//persons[0].height = 170;
//persons.splice(0, 1);

console.log(persons);

const personsContainer = document.getElementById("persons"); // <div id="app"></div>

// persons.forEach((person) => {
//   console.log(person);
// });

// persons.map((person) => {

// })

// Formulär
document.getElementById("personForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const theName = (document.getElementById("username") as HTMLInputElement)
    .value;
  const theAge = (document.getElementById("userage") as HTMLInputElement).value;
  const theIsMarried = (
    document.getElementById("userismarried") as HTMLInputElement
  ).checked;
  const theHeight = (document.getElementById("userheight") as HTMLInputElement)
    .value;

  persons.push(new Person(theName, +theAge, theIsMarried, +theHeight));

  createHtml(persons, personsContainer);
});

createHtml(persons, personsContainer);

document.getElementById("getData")?.addEventListener("click", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: IProduct[] = await response.json();

  console.log(products);

  const productsContainer = document.getElementById("products");

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const productContainer = document.createElement("div");
    const title = document.createElement("h3");
    const image = document.createElement("img");
    const price = document.createElement("b");
    const rating = document.createElement("input");

    rating.type = "range";
    rating.min = "0";
    rating.max = "5";
    rating.value = product.rating.rate.toString();
    rating.disabled = true;

    title.innerHTML = product.title;
    image.src = product.image;
    image.alt = product.title;
    price.innerHTML = product.price + " kr";

    productContainer.appendChild(title);
    productContainer.appendChild(image);
    productContainer.appendChild(price);
    productContainer.appendChild(rating);

    productsContainer?.appendChild(productContainer);
  }
});
