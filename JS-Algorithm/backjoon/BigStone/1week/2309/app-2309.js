const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => +item);

function seven(array) {
  const answer = [];
  let baseCase = answer.reduce((a, b) => a + b, 0);
  if (baseCase === 100) return answer;
  return seven(array.slice(1));
}

console.log(seven(input));
