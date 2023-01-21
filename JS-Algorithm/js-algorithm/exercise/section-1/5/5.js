const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((item) => +item);

function solution(input) {
  return Math.min(...input);
}

console.log(solution(input));
