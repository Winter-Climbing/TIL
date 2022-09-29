const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => +item);

let x = input[0];
let y = input[1];
let z = input[2];

solution(x, y, z);

function solution(a, b, c) {
  if (a == b && b == c) {
    console.log(10000 + a * 1000);
  } else if (a == b) {
    console.log(1000 + a * 100);
  } else if (a == c) {
    console.log(1000 + a * 100);
  } else if (b == c) {
    console.log(1000 + b * 100);
  } else {
    let max = Math.max.apply(null, input);
    console.log(max * 100);
  }
}
