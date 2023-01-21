const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  let length = arr.map((item) => item.length);
  let maximum = Math.max(...length);
  let idx = length.indexOf(maximum);
  return arr[idx];
}

console.log(solution(input));
