const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let value = Number(input[0].split(' ')[1]);

const coin = input
  .map(Number)
  .filter((i) => value >= i)
  .sort((a, b) => b - a);

let answer = 0;

for (let i = 0; i < coin.length; i++) {
  answer += parseInt(value / coin[i]);
  value %= coin[i];
}

console.log(answer);
