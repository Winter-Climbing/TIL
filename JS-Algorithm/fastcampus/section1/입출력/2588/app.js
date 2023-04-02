const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let first = input[0];
let second = input[1];

let second1 = second[2];
let second2 = second[1];
let second3 = second[0];

console.log(Number(first) * Number(second1));
console.log(Number(first) * Number(second2));
console.log(Number(first) * Number(second3));
console.log(Number(first) * Number(second));
