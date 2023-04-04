const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((i) => +i);

let data = input.map(Number);
let mySet = new Set();

for (let i = 0; i < 10; i++) {
  mySet.add(data[i] % 42);
}

console.log(mySet.size);
