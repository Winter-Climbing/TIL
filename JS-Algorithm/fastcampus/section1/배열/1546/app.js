const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = +input[0];
const arr = input[1]
  .trim()
  .split(' ')
  .map((i) => +i);

let max = Math.max(...arr);

let total = arr.map((i) => (i / max) * 100).reduce((a, b) => a + b);

console.log(total / num);
