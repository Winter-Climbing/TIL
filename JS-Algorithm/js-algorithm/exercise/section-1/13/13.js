const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let answer = "";
  for (let val of str) {
    let num = val.charCodeAt();
    if (num >= 65 && num <= 90) {
      answer += val.toLowerCase();
    } else {
      answer += val.toUpperCase();
    }
  }
  return answer;
}

console.log(solution(input));
