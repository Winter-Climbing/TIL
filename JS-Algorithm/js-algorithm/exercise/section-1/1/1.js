const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  input.map((num) => +num);
  return Math.min(...input);
}

console.log(solution(input));
