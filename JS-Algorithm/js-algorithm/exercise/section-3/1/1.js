const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let string = str.toUpperCase();
  let len = parseInt(str.length / 2);
  let answer = "YES";
  for (let i = 0; i < len; i++) {
    if (string[i] != string[str.length - i - 1]) return "NO";
  }
  return answer;
  return string.split("").reverse().join("") === string ? "YES" : "NO";
}

console.log(solution(input));
