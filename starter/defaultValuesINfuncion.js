'use strict';

//++++++++Default Parameters in ES6JS++++++++++++
//if while revoking function sometimes we dont define arguments for some parameters,in this case we can set some default values of parameters or even declared expression as alternative of hard core values
const bookingaArr = [];
const createBooking = function (
  flightNum,
  numPassangers = 2,
  price = 199 * numPassangers
) {
  //ES5
  //this is short circuiting
  //or provides always truthy value and second parameter if all are falsy
  //   numPassangers = numPassangers || 1;
  //   price = price || 199;

  const bookingObj = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(bookingObj);
  bookingaArr.push(bookingObj);
};
createBooking('LH123');
createBooking('LH123', 2, 100);
createBooking('LH123', 10);
createBooking('LH123', undefined, 10);
