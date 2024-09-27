class Animal {
  name;
  type;
  color;

  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

let lion = new Animal("Simba", "Lion", "Gul");
let gorilla = new Animal("Kingkong", "Gorilla", "Svart/Vit/Grå");
let polarbear = new Animal("Jorik", "Polarbear", "Vit");
let cat = new Animal("Majsan", "Cat", "Vit");
let dog = new Animal("Sven", "Dog", "Multicolor");

let animals = [lion, gorilla, polarbear, cat, dog];

let containerDiv = document.getElementById("animals");

for (let i = 0; i < animals.length; i++) {
  let div = document.createElement("div");
  div.className = "animal";
  div.addEventListener("click", () => {
    console.log("Du klickade på", animals[i]);
    // Lägg i varukorg
  });

  let name = document.createElement("h2");
  name.innerHTML = animals[i].name;
  div.appendChild(name);

  let type = document.createElement("p");
  type.innerHTML = animals[i].type;
  div.appendChild(type);

  let color = document.createElement("span");
  color.innerHTML = animals[i].color;
  div.appendChild(color);

  containerDiv.appendChild(div);
}
