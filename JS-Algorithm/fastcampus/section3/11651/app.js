const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}

const align = (a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  return a[0] - b[0];
};

arr.sort(align);

let answer = '';

for (let i of arr) {
  answer += i[0] + ' ' + i[1] + '\n';
}

console.log(answer);
