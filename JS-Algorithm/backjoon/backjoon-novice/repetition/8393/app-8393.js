const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let numbers = +input;

let answer = 0;

for (i = 1; i <= numbers; i++) {
  answer += i;
}

console.log(answer);
