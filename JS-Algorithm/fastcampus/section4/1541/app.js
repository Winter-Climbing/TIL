const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

// 가장 핵심은 -를 기준으로 요소를 나눌 수 있는가이다.
const arr = input[0].split('-');
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  // 위에서 -를 기준으로 나눴으니 +를 기준으로 나누진 요소들을 더해준다.
  let cur = arr[i]
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b);
  // 첫 번째 요소는 무조건 더해주고
  if (i == 0) {
    answer += cur;
    // 두 번째 요소부터는 -를 실행해준다.
  } else {
    answer -= cur;
  }
}

console.log(answer);
