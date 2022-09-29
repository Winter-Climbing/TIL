const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

const vs = [1, 1, 2, 2, 2, 8];
const result = vs.map((a, index) => a - input[index]);

console.log(result.join(" "));

function solution(A, B) {
  // Write your code
}
