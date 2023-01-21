const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

function solution(str) {
  let set = [...new Set(str)];
  let answer = "";
  for (let val of set) {
    answer += val;
  }
  return answer;
}

console.log(solution(input));
