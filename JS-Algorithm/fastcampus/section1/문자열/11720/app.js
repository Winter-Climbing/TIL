const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input[1].split('').reduce((a, b) => +a + +b);

console.log(arr);
