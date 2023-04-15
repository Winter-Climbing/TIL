const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

// now와 answer를 나눠서 처리
// now에 누적합을 시키고 해당 누적합을 answer에 더함으로서 완료
let now = 0;
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  now += arr[i];
  answer += now;
}

console.log(answer);
