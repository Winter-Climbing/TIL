const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 가장 작은 값이 0, 그 다음 1 이런식으로 치환시키는다는 생각을 가져보자 멍충아!

const arr = input[1].split(' ').map(Number);

const uniqueArr = [...new Set(arr.sort((a, b) => a - b))];

const map = new Map();

for (let i = 0; i < uniqueArr.length; i++) {
  map.set(uniqueArr[i], i);
}

let answer = '';

for (let x of arr) {
  answer += map.get(x) + ' ';
}

console.log(answer);
