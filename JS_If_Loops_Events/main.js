const x = 10;
const y = "10";

//#region  If/Else

// if (x > 10) {
//   console.log("Det var ett stort tal");
// } else {
//   console.log("Det var ett litet tal");
// }

// if (x >= 10) {
//   console.log("X är större eller lika med 10");
// }

// if (x === 10) {
//   console.log("X är exakt 10");
// }

// if (x !== 10) {
//   console.log("X är inte 10");
// }

// if (y == x) {
//   console.log("y är lika med 10");
// }

//#endregion

//#region Loopar

for (let i = 0; i < 10; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

let a = 0;
while (a < 10) {
  console.log(a);
  a++;
}

// Exempel

const numbers = [1, 1, 2, 3, 5, 8, 13, 21];

for (let i = 0; i < numbers.length; i++) {
  const h3 = document.createElement("h3");
  h3.innerHTML = numbers[i];

  document.body.appendChild(h3);
}

//#endregion

//#region Events
function handleSave() {
  console.log("Du klickade på knappen");
}

const handleChange = (e) => {
  //   console.log("Du skriver i textrutan");
  console.log(e.target.value);
};

const btn = document.getElementById("saveButton");
console.log(btn);

// btn.innerHTML = "Ändra";

btn.addEventListener("click", handleSave);

const textInput = document.getElementById("username");
console.log(textInput);
textInput.addEventListener("keydown", handleChange);

//#endregion
