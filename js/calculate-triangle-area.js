const baseValue = 5;
const heightValue = 7;
const areaValue = (baseValue * heightValue) / 2;
// console.log(areaValue);

// Method-02:
const side1 = 3;
const side2 = 4;
const side3 = 5;

// calculate the semi-perimeter:
const s = (side1 + side2 + side3) / 2;

// calculate the area:
const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log(area);
