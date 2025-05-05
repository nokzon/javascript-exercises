const convertToCelsius = function(temperature) {
  let celsius = (temperature - 32) * (5/9);
  if (celsius%1 !== 0){
    celsius = Number(celsius.toFixed(1));
  }
  return celsius;
};

const convertToFahrenheit = function(temperature) {
  let farenheit = temperature * (9/5) + 32;
  if (farenheit%1 !== 0){
    farenheit = Number(farenheit.toFixed(1));
  }
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
