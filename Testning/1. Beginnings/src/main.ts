import "./style.css";

const todos: string[] = ["Lorem", "ipsum", "dolor"];

const createHtml = () => {
  const ul = document.getElementById("todos");

  if (ul) {
    ul.innerHTML = "";
  }

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = todos[i];
    ul?.appendChild(li);
  }
};

document.getElementById("saveButton")?.addEventListener("click", () => {
  const theText = (document.getElementById("userInput") as HTMLInputElement)
    .value;

  todos.push(theText);
  createHtml();
});

createHtml();
