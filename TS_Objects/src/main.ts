import { sum } from "./functions";
import { Person } from "./models/Person";
import "./style.css";

let s: number = sum(10, 20);
console.log(s);

let p: Person = new Person("Sebastian", 44, true);

console.log(p.name);

let persons: Person[] = [];

persons.push(p); // { name: "Sebastian", age: 44, isMarried: true }
persons.push(new Person("Hanna", 44, true)); // { name: "Hanna", age: 44, isMarried: true }
persons.push(new Person("Astrid", 14, false)); // { name: "Astrid", age: 14, isMarried: false }
persons.push(new Person("Alvar", 14, false));

console.log(persons);

let app: HTMLElement | null = document.getElementById("app");

for (let i: number = 0; i < persons.length; i++) {
  let container: HTMLDivElement = document.createElement("div");
  let name: HTMLHeadingElement = document.createElement("h2");
  let age: HTMLParagraphElement = document.createElement("p");
  let checkbox: HTMLInputElement = document.createElement("input");

  container.addEventListener("click", () => {
    console.log(persons[i]);
  });
  container.className = "person";

  name.innerHTML = persons[i].name;
  age.innerHTML = persons[i].age.toString();
  checkbox.type = "checkbox";
  checkbox.checked = persons[i].isMarried;

  container.appendChild(name);
  container.appendChild(age);
  container.appendChild(checkbox);

  if (app !== null) {
    app.appendChild(container);
  }
}
