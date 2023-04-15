const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

let num = +input;
let sum = 0;
let answer = 0;

while (num >= sum) {
  answer += 1;
  sum += answer;
}

console.log(answer - 1);
