'use strict';
//js treated function as first class citizen
//func are simply values-
//func are just another type of object

//examples
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//higher order function
const transformer = function (str, fn) {
  console.log(`Original string is: ${str}`);
  console.log(`Transform String: ${fn(str)}`);

  console.log(`Transformed by:${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);

transformer('javaScript is the best', oneWord);

const high5 = function () {
  //   console.log('👏');
};
document.body.addEventListener('click', high5);

['jonas', 'martha', 'adam'].forEach(high5);

//higher order function helps us to allow abstraction

//FUNCTIONS RETURNING ANOTHER FUNCTION
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('hey');
greeterHey('karina');
greeterHey('stev');

greet('Hello')('steven');

//
const arrowFn = greeting => name => console.log(`${greeting} ${name}`);
arrowFn('hola')('brother');

//call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};
lufthansa.book(239, 'jonas bairwa');
lufthansa.book(635, 'jone yadav');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//regular function call(here this point to undefined)
// book(23, 'Sarah Williams');

//using call,apply,bind method(since fn are object so yes)

book.call(eurowings, 23, 'Sarah williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary cooper');

console.log(lufthansa);

const swiss = {
  airline: 'Swiss air lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 203, 'maraina grande');

//Apply method
const flightData = [583, 'george cooper'];

book.apply(swiss, flightData);
//
book.call(swiss, ...flightData);

//bind method(it binds evrything)
const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSw = book.bind(swiss);

bookEw(300, 'steven waughan');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('monica');
bookEW23('mischel');
bookEW23('crusiter');

//some cases to use these methods

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 200));
