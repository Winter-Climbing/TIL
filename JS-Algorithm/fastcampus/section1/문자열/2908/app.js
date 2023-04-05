const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let first = input[0].split('').reverse().join('');
let second = input[1].split('').reverse().join('');

let answer = Number(first) >= Number(second) ? `${first}` : `${second}`;

console.log(answer);
