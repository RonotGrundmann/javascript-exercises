const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32)*(5/9);

  celcius = celcius.toFixed(2);

  return celcius;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = celcius * (9/5) + 32;

  fahrenheit = fahrenheit.toFixed(2);

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
