import { Car } from "./models/Car";
import "./style.css";

let myOldCar: Car = new Car("Nissan", "Micra", "Red");
let myCurrentCar: Car = new Car("Tesla", "S", "Blue");

let cars: Car[] = [myOldCar, myCurrentCar];

let container: HTMLElement | null = document.getElementById("app");

function createHtml() {
  if (container !== null) {
    container.innerHTML = "";
  }

  for (let i: number = 0; i < cars.length; i++) {
    let card: HTMLElement = document.createElement("article");
    let brand: HTMLHeadingElement = document.createElement("h2");
    let model: HTMLParagraphElement = document.createElement("p");
    let color: HTMLSpanElement = document.createElement("span");

    card.addEventListener("click", () => {
      //   if (cars[i].selected === false) {
      //     cars[i].selected = true;
      //   } else {
      //     cars[i].selected = false;
      //   }
      cars[i].selected = !cars[i].selected;

      console.log(cars[i]);
      createHtml();
    });

    if (cars[i].selected === true) {
      card.className = "selected";
    }

    brand.innerHTML = cars[i].brand;
    model.innerHTML = cars[i].model;
    color.innerHTML = cars[i].color;

    card.appendChild(brand);
    card.appendChild(model);
    card.appendChild(color);

    if (container !== null) {
      container.appendChild(card);
    }
  }
}

createHtml();
