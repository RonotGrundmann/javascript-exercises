const add = function(num1, num2) {
	let sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
	let dif = num1 - num2;
  return dif;
};

const sum = function(myArray) {
  let sum = 0;

	for (let i = 0; i < myArray.length; i++){
    sum = sum + myArray[i];
  }
  
  return sum;
};

const multiply = function(myArray) {
  let product = 1;

  for (let i = 0; i < myArray.length; i++) {
    product = product * myArray[i];
  }

  return product;
};

const power = function(num1, num2) {

  let power = num1 ** num2;

  return power;	
};

const factorial = function(num) {
  let fact = 1;

  if (num > 1){

    for (let i = num; i > 0; i--){
      fact = fact * i;
    }

  }

  return fact;
	
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
