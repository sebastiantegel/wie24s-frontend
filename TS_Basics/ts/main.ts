let x: number = 10;
let firstname: string = "Sebastian";

function printAge(name: string, age: number) {
  console.log(name, "is", age, "years old");
}

printAge("Sebastian", 44);

const sum = (x: number, y: number): number => {
  return x + y;
};

let myDiv: HTMLElement | null = document.getElementById("container");

if (myDiv !== null) {
  myDiv.className = "wrapper";
}

let theInput: HTMLInputElement = document.getElementById(
  "name"
) as HTMLInputElement;

if (theInput !== null) {
  console.log(theInput.value);
}
