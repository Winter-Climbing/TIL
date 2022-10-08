const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = Number(fs.readFileSync(filePath));

let num = input;
let sum;
let count = 0;

while (true) {
  count++;

  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (input === num) {
    break;
  }
}

console.log(count);
