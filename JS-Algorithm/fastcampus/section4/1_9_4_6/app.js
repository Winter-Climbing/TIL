const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = Number(input.shift());

let arrNum = Number(input.shift());

for (let i = 0; i < arrNum; i++) {
  let [a, b] = input[i].split(' ').map(Number);
}
