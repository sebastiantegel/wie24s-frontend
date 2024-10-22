//#region Arrays

//             0  1  2  3  4  5
let numbers = [1, 1, 2, 3, 5, 8];

console.log(numbers);
console.log(numbers.length);
console.log(numbers[numbers.length - 1]);

numbers.push(13);

console.log(numbers);

numbers.pop();

console.log(numbers);

numbers.splice(3, 1);

console.log(numbers);

numbers[0] = 4711;

console.log(numbers);
//#endregion

numbers.push(13);
numbers[0] = 1;
numbers.push(21);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//#region Skapa html

let theDiv = document.createElement("div"); // <div></div>

theDiv.innerHTML = "<h2>Lorem</h2><p>Lorem ipsum dolor sit amet</p>"; // <div><h2>Lorem</h2><p>Lorem ipsum...</p></div>
theDiv.className = "wrapper";

document.body.appendChild(theDiv);

let ul = document.getElementById("theList"); // <ul id="theList"></ul>

// let li = document.createElement("li"); // <li></li>
// li.innerHTML = "Hej"; // <li>Hej</li>
// ul.appendChild(li); // <ul><li>Hej</li></ul>

function createHtml() {
  ul.innerHTML = "";

  for (let i = 0; i < numbers.length; i++) {
    let li = document.createElement("li"); // <li></li>
    li.innerHTML = numbers[i]; // <li>4711</li>
    ul.appendChild(li); // <ul><li>4711</li></ul>
  }
}

//#endregion

//#region Events

let removeButton = document.getElementById("removeLast");
removeButton.addEventListener("click", () => {
  numbers.pop();
  console.log(numbers);
  createHtml();
});

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
  let theValueFromUser = document.getElementById("userInput").value; // Texten i textrutan
  numbers.push(+theValueFromUser);
  console.log(numbers);
  document.getElementById("userInput").value = "";
  createHtml();
});

createHtml();
