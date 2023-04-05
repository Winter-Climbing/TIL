const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let arr = input[i].toString().split(' ');

  let num = +arr[0];
  let char = arr[1];

  if (char === undefined) continue;

  let answer = '';

  for (let i = 0; i < char.length; i++) {
    answer += char[i].repeat(num);
  }

  console.log(answer);
}
