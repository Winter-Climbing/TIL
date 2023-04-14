const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let now = 0;
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  now += arr[i];
  answer += now;
}

console.log(answer);
