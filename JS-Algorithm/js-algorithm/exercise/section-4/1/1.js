const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

function solution(arr) {
  let answer = 0;
  const array = [];
  let sum = 0;

  for (let val of arr) {
    let len = String(val).length;
    for (i = 0; i < len; i++) {
      sum += val % 10;
      val = parseInt(val / 10);
      if (val < 1) {
        array.push(sum);
        sum = 0;
      }
    }
  }
}

console.log(solution(input));
