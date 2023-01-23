const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let str = input.toLowerCase();

function solution(str) {
  let string = str.replace(/[^a-z]/g, "");
  return string.split("").reverse().join("") === string ? "YES" : "NO";
}

console.log(solution(str));
