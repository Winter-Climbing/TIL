const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = +input[0];
let a = input[1].trim().split(" ");
let b = input[2].trim().split(" ");

function solution(num, a, b) {
  let answer = [];

  for (let i = 0; i < num; i++) {
    if (a[i] === b[i]) {
      answer.push("D");
    } else if (a[i] - b[i] === 1) {
      answer.push("A");
    } else if (a[i] - b[i] === 2) {
      answer.push("B");
    } else if (a[i] - b[i] === -1) {
      answer.push("B");
    } else if (a[i] - b[i] === -2) {
      answer.push("A");
    }
  }

  return answer.toString();
}

console.log(solution(num, a, b));
