const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input[0];
const value = input[1];

function solution(str, value) {
  let answer = 0;
  for (let val of str) {
    if (val === value) answer++;
  }
  return answer;
}

console.log(solution(str, value));
