const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let testCase = Number(input[0]);
let answer = '';

for (let t = 1; t <= testCase; t++) {
  let data = input[t].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);
  // answer에 값을 모두 저장해놨다가
  answer += a + b + '\n';
}

// 한 번에 출력한다. 이렇게 되면 속도가 더 빠르다.
console.log(answer);
