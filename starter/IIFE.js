'use strict';

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again');
  //this is private data of function scope
  //make sense of data encapsulation
  const isPrivate = 23;
  console.log(isPrivate);
})();

// console.log(isPrivate); //cant access the block scope
//this is the reason why we use this so called IIFE

//IIFE IN ARROW
(() => console.log('This will never run again using Arrow function'))();

//same thing made easier by ES6 by using like this below mentioned
{
  const isPrivate = 200;
  var isPrivateBuddy = 2000;
}

// console.log(isPrivate);
console.log(isPrivateBuddy);
