const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
  console.log(A * (B % 10));
  console.log(A * Math.floor((B % 100) / 10));
  console.log(A * Math.floor((B % 1000) / 100));
  console.log(A * B);
}
