const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let gram = +input;

let num = 0;
let answer = 0;

for (let i = 0; i < 1; i++) {
  if (gram % 5 !== 0 && gram % 3 !== 0) {
    gram = -1;
    answer = -1;
  }
}

while (gram > 0) {
  if (gram / 5 >= 1) {
    answer += parseInt(gram / 5);
    gram %= 5;
  } else if (gram / 3 >= 1) {
    answer += parseInt(gram / 3);
    gram %= 3;
  } else {
    return answer;
  }
}

console.log(answer);
