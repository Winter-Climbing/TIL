const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.join('').split('-');

let answer = 0;

for (let i = 0; i < arr.length; i++) {
  let plusArr = arr[i]
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b);
  if (i === 0) {
    answer = Number(arr[0]);
  } else {
    answer -= plusArr;
  }
}

console.log(answer);
