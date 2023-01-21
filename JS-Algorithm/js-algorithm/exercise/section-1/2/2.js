const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[1];
input = input.split(" ").map((item) => +item);

function solution(input) {
  const MAX = Math.max(...input);
  const maxFiltered = input.filter((item) => MAX !== item);
  return maxFiltered[0] + maxFiltered[1] >= MAX ? "YES" : "NO";
}

console.log(solution(input));
