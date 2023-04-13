const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 자바스크립트에서의 정렬은 기본적으로 stable이다.

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  let age = Number(input[i].split(' ')[0]);
  let name = input[i].split(' ')[1];
  arr.push([age, name]);
}

arr.sort((a, b) => a[0] - b[0]);

let answer = '';
for (let x of arr) answer += x[0] + ' ' + x[1] + '\n';

console.log(answer);
