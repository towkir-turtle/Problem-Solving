const celsiusToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};
const result = celsiusToFahrenheit(32);
console.log(result);
