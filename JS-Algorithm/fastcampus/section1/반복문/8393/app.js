const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

// 문자열을 수로 변환할 때, parseInt에 비하여 Number의 속도가 더 빠르다.
let n = Number(input[0]);

// 등차수열
console.log((n * (n + 1)) / 2);
