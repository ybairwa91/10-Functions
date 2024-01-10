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
  console.log('👏');
};
document.body.addEventListener('click', high5);

['jonas', 'martha', 'adam'].forEach(high5);

//higher order function helps us to allow abstraction
