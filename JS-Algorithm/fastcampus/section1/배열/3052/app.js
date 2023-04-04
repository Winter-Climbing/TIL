const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((i) => +i);

const NUM = 42;
const newArr = input.map((i) => i % NUM);

const set = new Set(newArr);
console.log(set.size);
