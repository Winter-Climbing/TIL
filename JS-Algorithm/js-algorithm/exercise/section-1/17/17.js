const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(input);

function solution(arr) {
  const answer = arr.filter((value, idx) => arr.indexOf(value) === idx);
  return answer;
}

console.log(solution(input));
