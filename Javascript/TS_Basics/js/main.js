var x = 10;
var firstname = "Sebastian";
function printAge(name, age) {
    console.log(name, "is", age, "years old");
}
printAge("Sebastian", 44);
var sum = function (x, y) {
    return x + y;
};
var myDiv = document.getElementById("container");
if (myDiv !== null) {
    myDiv.className = "wrapper";
}
var theInput = document.getElementById("name");
if (theInput !== null) {
    console.log(theInput.value);
}
