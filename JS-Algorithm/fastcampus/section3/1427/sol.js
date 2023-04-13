const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 빈도수 추가

let n = input[0];
let cnt = Array(10).fill();

for (let x of n) {
  cnt[Number(x)]++;
}

let answer = '';

for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < cnt[i]; j++) answer += i + '';
}

console.log(answer);
