'use strict';

const bookingaArr = [];
const createBooking = function (flightNum, numPassangers, price) {
  const bookingObj = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(bookingObj);
  bookingaArr.push(bookingObj);
};
createBooking('');
