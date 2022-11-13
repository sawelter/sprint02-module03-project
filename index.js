// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

// eat(String food), no return
// pushes food onto stomach array
Person.prototype.eat = function(someFood) {
  if(this.stomach.length < 10) {
    this.stomach.push(someFood);
  }
}

// poop(), no params, no return
// empties stomach array
Person.prototype.poop = function () {
  this.stomach = [];
}

// toString(), no params, return String
// return "[name], [age]" e.g. "Mary, 50"
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
}

// const person1 = new Person('Minoru', 16);

// console.log(person1);
// person1.eat("curry");
// person1.eat("rice");
// person1.eat("cookies");
// console.log(person1.stomach);
// person1.poop();
// console.log(person1.stomach);
// console.log(person1.toString());


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, mpg) {
  this.model = model;
  this.milesPerGallon = mpg;
  this.tank = 0;
  this.odometer = 0;
}

// fill - fills tank var w gallons of fuel
// parameter: int; returns: n/a
Car.prototype.fill = function (gallons) {
  this.tank += gallons;
}

// drive - increases odometer, decreases fuel, returns string if out of fuel
// parameter: int, returns: string (sometimes)
Car.prototype.drive = function (distance) {
  if (distance > (this.tank * this.milesPerGallon)) {
    distance = this.tank * this.milesPerGallon;
  }
  this.odometer += distance;
  this.tank -= distance / this.milesPerGallon;
  if(this.tank <= 0) {
    return `I ran out of fuel at ${this.odometer} miles!`;
  } else {
    return `I drove ${distance} miles and my tank is at about ${Math.floor(this.tank)} gallons.`
  }
}

// const myCar = new Car({model: 'Honda Fit', milesPerGallon: 30});
// myCar.fill(10);
// console.log(myCar);
// console.log(myCar.drive(500));
// console.log("I'm filling up my car.");
// myCar.fill(10);
// console.log(myCar.drive(50));
// console.log(myCar.drive(100));

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, toy) {
  Person.call(this, name, age);
  this.favoriteToy = toy;
}

Baby.prototype = Object.create(Person.prototype);

// no params, returns string
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}

// const baby1 = new Baby({name: 'Rui', age: 1, favoriteToy: 'dolls'});
// console.log(baby1);
// baby1.eat("baby food");
// console.log(baby1);
// console.log(baby1.play());



/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. window binding
      When "this" is used outside of the scope of an object or class or whatever, it binds to the window, so the most general level of the code.
  2. internal binding
      Internal binding is also dot notation - when this is referred to within a constructor/function/etc as this.property.
  3. external binding
      External binding is when "this" is uesd via .bind, .apply, .call. It still uses the "this" of an object but not as directly like with internal binding.
  4. new binding
      Used in a constructor to set new object properties to the properties passed in e.g. this.property = argument.property
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
