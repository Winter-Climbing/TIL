const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let mid = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    return `${str[mid - 1]}${str[mid]}`;
  } else {
    return str[mid];
  }
}

console.log(solution(input));
