//Any function has access to all the variable or other properties of the scope in which it is created means
//here return function has access to the passangerCount variable since both are in same scope and both have same environment

//a function has always access to the variable environment of the execution context in which it is created.

//closure-variable environment attached to the function exactly as it was at the time and place the function was created.

//function birthplace variable can be accessed by the function that what closure is

const secureBooking = function () {
  let passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`${passangerCount} Passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

//better examples
let f; //f defined here

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
//g called and f is in the variable enviroment of g here
g();
f();
console.dir(f);

//f reassigned by h
//called and f is now in the variable environment of f here
h();
f();

console.dir(f);
