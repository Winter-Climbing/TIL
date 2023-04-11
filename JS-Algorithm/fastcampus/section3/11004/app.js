const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let findNum = Number(input[0].split(' ')[1]);
let arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(arr[findNum - 1]);
