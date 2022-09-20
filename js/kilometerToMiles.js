// We know that 1 kilometer is equal to 0.621371 miles.

const kilometerToMiles = (kilometer) => {
  const miles = kilometer * 0.621371;
  return miles;
};
const result = kilometerToMiles(10);
console.log(result);
