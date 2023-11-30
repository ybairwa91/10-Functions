'use strict';

/*
//+++++++++first class function+++++++++++
..javascript treats function as first class citizen,
..it means that function are simply values

..functions are just another type of objects in js
and since objects are value so does functions
..now we can store function in variable or properties
..pass function as an parameter or argument whatver u want to just as the same behaviour of variables
..pass a function in another function
..since function as just object so just like object,function too have methods for ie binf method
*/

/*
+++++++++++++Higher Order Function+++++++++++++
 
..when a function recieves another function as an argument and that returns a new function or both
..higher order function possible because of first class function
..recall addEventListener where we put function as an argument 
..when we pass a function as an argument we call it callback function,it mean this function will be call later by the higher order function
..




*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order function
const transformer = function (str, fn) {
  console.log(`original string:${str}`);
  console.log(`Transform string:${fn(str)}`);
  //function has a name property
  console.log(`Transformed by:${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

//js uses callbacks all the time
const high5 = function () {
  console.log('👏');
};
document.body.addEventListener('click', high5);

['jonas', 'martha', 'adam'].forEach(high5);

//callback function allow us to create abstraction(hiding unnecessary codes that doesnot make sense at all.)

//+++++++++++++function returning function+++++++++++++++++
//its broader part of closure and functional programming here

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('boy');
greeterHey('baboy');
greeterHey('april');

greet('hello')('jonas');

//lets do same with arrow function

const greetArrow = a => b => console.log(`${a} ${b}`);

greetArrow('hi')('buddy');

//++++++++++++++++++call and apply method++++++++++++

//this is an object named lufthansa
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  //create a method in this object

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(238, 'jonas');
lufthansa.book(650, 'yogesh');
console.log(lufthansa);

//another object doesnot have any method
const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//now suppose we have another object called eurowings but we have a method in the object named lufthansa,so accessing another object method is what call apply and bind  is useful bro

//since function is first class citizen we now storing book function(Or say method) in the book variable and see book is a function and not a method in the object
const book = lufthansa.book;

//regular function call of book method and we know this is undefined when we use regular function
// book(23, 'sarah williams');---doesnot work since book is here now a regular function and not a method

//manually manipulatig this keyword to point which object
book.call(eurowings, 23, 'sarah williams');
console.log(eurowings);

book.call(lufthansa, 50, 'mary cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SA',
  bookings: [],
};

book.call(swiss, 23, 'john cena');
console.log(swiss);

//Apply method--its same u just need to put argument of regular function in array format ,thats it

const flightData = [538, 'George cooper'];
// book.apply(swiss, [538, 'George cooper']);
book.apply(swiss, flightData);

console.log(swiss);

//call method
book.call(swiss, ...flightData);

//Bind method-also allow this keyword to manually ,only difference is that bind not immediately call the function instead it returns new function where this keyword is bound

const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSA = book.bind(swiss);

//creating a new function using bind has this keyword which points to its object which we used as an argument
bookEw(23, 'steve hardy');

// console.log(eurowings);

//furthur
//preset the flightNum parameter value while creating the function itself
const bookEW23 = book.bind(eurowings, 23);

bookEW23('Jonas bairwa');
bookEW23('martha cooper');
bookEW23('john cena');

//preset all values
const bookEW23Jonas = book.bind(eurowings, 23, 'jonas');

bookEW23Jonas();

//with addEventListeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

lufthansa.buyPlane();

//this keyword in addEventListener is pointing to the element which is selected so here we have .buy class element which is selected

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application of bind method

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

// addTax = (rate, value) => value + value * 23;
const addVAT = addTax.bind(null, 23);

console.log(addVAT(100));
console.log(addVAT(23));

//same thing with using one function return another function

function addTaxRate(rate) {
  return function (value) {
    return value + value * rate;
  };
}

let addVATT = addTaxRate(0.23);
console.log(addVATT);

console.log(addVATT(0.1));

//Easy explanation of apply call and bind

//lets create an object
let objectTest = {
  nameOfObject: 'objectTest',
};
let objectTasty = {
  nameOfObject: 'objectTasty',
};
let objectTestorone = {
  nameOfObject: 'objectTestorone',
};

//lets create a function
function testingFunction(a, b) {
  // console.log(a, b);
  console.log(this);
}

//see testingFunction is not inside of objectTest but we use call method to insert in objectTest and call it
testingFunction.call(objectTest, 5, 10);
testingFunction.call(objectTasty, 5, 10);
testingFunction.call(objectTestorone, 5, 10);

//to use apply method we just need to put arguments in array that it

testingFunction.apply(objectTest, [10, 20]);
