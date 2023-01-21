const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = +input[1];

function solution(input) {
  let answer = 0;
  for (i = 1; i <= input; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(input));
