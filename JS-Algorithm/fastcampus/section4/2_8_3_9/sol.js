const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = Number(input[0]);
let cnt = 0;
let flag = false;

while (num >= 0) {
  if (num === 0 || num % 5 === 0) {
    cnt += parseInt(num / 5);
    console.log(cnt);
    flag = true;
    break;
  }
  num -= 3;
  cnt += 1;
}

if (!flag) {
  console.log(-1);
}
