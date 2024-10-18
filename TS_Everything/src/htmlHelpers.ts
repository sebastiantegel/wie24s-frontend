import { Person } from "./models/Person";

export const createHtml = (persons: Person[], app: HTMLElement | null) => {
  if (app) {
    app.innerHTML = "";
  }

  // Loopar
  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];

    console.log(person);

    const section = document.createElement("section"); // section = <section></section>
    const name = document.createElement("h2"); // name = <h2></h2>
    const height = document.createElement("span"); // height = <span></span>
    const removeButton = document.createElement("button");
    removeButton.setAttribute("data-bs-toggle", "modal");
    removeButton.setAttribute("data-bs-target", "#exampleModal");

    name.innerHTML = person.name; // <h2>Sebastian</h2>
    height.innerHTML = person.height.toString(); // <span>165</span>
    removeButton.innerHTML = "Ta bort";

    // removeButton.addEventListener("click", () => {
    //   persons.splice(i, 1);
    //   createHtml(persons, app);
    // });

    section.appendChild(name); // <section><h2>Sebastian</h2></section>
    section.appendChild(height);
    section.appendChild(removeButton);
    /*
      <section>
        <h2>Sebastian</h2>
        <span>165</span>
        <button>Ta bort</button>
      </section
    */

    // if(app) {
    //   app.appendChild()
    // }

    app?.appendChild(section);
  }
};
