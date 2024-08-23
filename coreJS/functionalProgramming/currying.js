// FUNCTION IS TRANSFORMED INTO A SEQUENCE OF FUNCTIONS EACH TAKING A SINGLE ARGUMENT
function add(x) {
  return function (y) {
    return x + y;
  };
}

const adder = add(5);
console.log(adder(4));
