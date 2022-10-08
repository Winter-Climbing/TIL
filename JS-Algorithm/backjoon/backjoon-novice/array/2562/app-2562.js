const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => +item);

let maxAnswer = Math.max(...input);
let index = input.indexOf(maxAnswer);
let lengAnswer = index + 1;
console.log(maxAnswer);
console.log(lengAnswer);
