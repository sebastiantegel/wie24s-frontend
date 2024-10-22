window.onload = () => {
  console.log("Finished loading the html");
  greeting("Another hello world!");
  let s2 = sum(10, 20);
  console.log(s2);
};

// function greeting(textToPresent) {
//   console.log(textToPresent);
// }

const greeting = (textToPresent) => {
  console.log(textToPresent);
};

function sum(x, y) {
  let s = x + y;
  //   console.log(s);
  return s;
}

let theDiv = document.getElementById("wrapper");
console.log(theDiv);
console.log(theDiv.id);
console.log(theDiv.innerHTML);

theDiv.innerHTML = "<h2>Lorem ipsum</h2>";
