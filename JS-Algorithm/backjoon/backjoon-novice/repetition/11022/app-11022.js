const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let numbers = input[0];
let answer = 0;

for (i = 1; i <= numbers; i++) {
  answer = input[i].split(" ").reduce((arr, cur) => +arr + +cur);
  let newArr = input[i].split(" ");
  console.log(`Case #${i}: ${newArr[0]} + ${newArr[1]} = ${answer}`);
}
