const checkEvenOdd = (num) => {
  if (num % 2 === 0) {
    return `${num} is a even number.`;
  } else {
    return `${num} is a odd number.`;
  }
};
const result = checkEvenOdd(50);
console.log(result);
