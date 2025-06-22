const add = function(...theArgs) {
	return theArgs.reduce((acc,index) => acc + index,0);
};

const subtract = function(...theArgs) {
  return theArgs.slice(1).reduce((acc,index) => acc - index,theArgs[0]);
};

const sum = function(theArgs) {
  let sum = 0;
  for(let i of theArgs)
  {
    sum += +i;
  }
  return sum
};

const multiply = function(theArgs) {
  return theArgs.reduce((acc,index) => acc * index,1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let fac = 1;
	for(let i = 1; i<=a; i++){
    fac *= i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
