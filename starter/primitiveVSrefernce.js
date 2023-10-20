//+++++++++How passing argument works in function++++++++++

//how primitive and objects works in context of function

const flight = 'LH234';

const jonas = {
  name: 'jonas bairwa',
  passport: 329759275097,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  jonas.name = 'Mr.' + jonas.name;
  if (passenger.passport === 329759275097) {
    console.log('check In');
  } else {
    console.log('wrong passport');
  }
};
checkIn(flight, jonas);

//since flight is a primitive data type so will not chnge the flight value since it create copies and then chnge
console.log(flight);
//flightNum=flight

//object and arry value will change as it is refernce data type and change the original one
console.log(jonas);

//thats why we call nonprimitve data type as refernce data type

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

//passport value must be changed
newPassport(jonas);

//give else situation as passport is chnged
checkIn(flight, jonas);

//object jonas
console.log(jonas);

///note==js doesnot have passing by reference ,js only has passing by value
