const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const first = +input[0];

for (let i = 1; i <= first; i++) {
  let num = +input[i][0];
  let newArr = input[i]
    .slice(1)
    .trim()
    .split(' ')
    .map((i) => +i);
  let average = newArr.reduce((a, b) => a + b) / num;

  let excess = 0;

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > average) {
      excess++;
    }
  }

  let answer = ((excess / num) * 100).toFixed(3);

  console.log(`${answer}%`);
}
