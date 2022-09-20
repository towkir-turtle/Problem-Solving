const checkNumber = (num) => {
  if (num === 0) {
    return `This is Zero`;
  } else if (num > 0) {
    return `${num} is a positive number.`;
  } else if (num < 0) {
    return `${num} is a negative number.`;
  }
};
const result = checkNumber(84785);
console.log(result);
