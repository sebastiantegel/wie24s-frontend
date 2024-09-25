let person = {
  name: "Sebastian",
  age: 44,
  isMarried: true,
};

console.log(person);

class Person {
  name;
  age;
  isMarried;

  constructor(firstname, age, isMarried) {
    this.name = firstname;
    this.age = age;
    this.isMarried = isMarried;
  }
}

let me = new Person("Sebastian", 44, true);
let wife = new Person("Hanna", 44, true);
let daugther = new Person("Astrid", 14, false);
let son = new Person("Alvar", 14, false);

let family = [wife, daugther, son, me];
console.log(family);

//family[0] -> wife -> Person
console.log(family[0]);
