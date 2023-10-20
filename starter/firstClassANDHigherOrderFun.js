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

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //   book: function () {},
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

const eurowings = {
  name: 'Eurowings',
  iatacode: 'EW',
  booking: [],
};
