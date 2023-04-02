const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let totalMinute = a * 60 + b + c; // 분의 형태로 바꾸기
totalMinute %= 1440; // 1440은 하루 총 분이다.
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + ' ' + minute);
