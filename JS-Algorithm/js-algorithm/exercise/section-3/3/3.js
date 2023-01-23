const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i].charCodeAt();
    if (char < 65) answer += str[i];
  }
  return Number(answer);
}

console.log(solution(input));
