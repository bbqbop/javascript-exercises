const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for (num of array){
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let total = array[0];
  for (num of array.splice(1)){
    total *= num;
  }
  return total;
};

const power = function(a, b) {
  let numPow = a;
	for (i = 1; i < b; i++){
    numPow *= a;
  }
  return numPow;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;
  else {
    for (let i = num - 1; i >= 1; i--){
      num *= i;
    }
    return num;
  }
	
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
