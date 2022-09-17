let first = 100;
let second = 200;
let temp = first;
first = second;
second = temp;
console.log(first, second);

// Method-02:
let a = 100;
let b = 200;
[a, b] = [b, a];
console.log(a, b);
