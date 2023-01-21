const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

function solution(input) {
  return input.map((str) => (str === "A" ? "#" : str)).join("");
}

console.log(solution(input));
