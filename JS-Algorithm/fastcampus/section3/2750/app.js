const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((i) => +i);

input.shift();

let arr = input.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  console.log(`${arr[i]}`);
}
