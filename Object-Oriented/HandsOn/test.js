const mixedArray = [
  [1, 2, 3],
  ["Hello", "Good", "Morning"],
  [true, false],
  [2.34, 34.55],
];

console.log(mixedArray);
//-------------------------------------

const menu = {
  name: "Salted Caramel Ice Cream",
  price: 2.95,
  ingredients: ["butter", "salt", "ice cream", "sugar"],
};

console.log(Array.isArray(menu.ingredients));
console.log(menu.ingredients);
console.log(menu.ingredients.sort());
//--------------------------------------

const cat = {
  age: 2,
  name: "Bailey",
  meow: function () {
    console.log("Meow!");
  },

  greet: function (name) {
    console.log(`Hello ${name}`);
  },
};

//  -------------------------------------

const myName = "Andrew";
function introduceMyself() {
  const you = " student";
  function introduce() {
    console.log(`Hello, ${you}, I'm ${myName}!`);
  }
  return introduce();
}
introduceMyself();

//---------------------------------------

function City(name, population) {
  this.name = name;
  this.population = population;

  this.identify = function () {
    console.log(`${this.name}'s population is ${this.population}.`);
  };
}
const sanFrancisco = new City("San Francisco", 870000);

console.log(sanFrancisco);

const mountainView = new City("Mountain View", 78000);

console.log(mountainView);

