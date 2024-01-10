const flight = 'LH234';
const jonas = {
  name: 'jonas',
  passport: 327930,
};

const checkIn = function (flightNum, Passenger) {
  flightNum = 'LH999';
  Passenger.name = 'Mr.' + Passenger.name;
  if (Passenger.passport === 327930) {
    alert('checkIn');
  } else {
    alert('wrong passport');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
