const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let [r, s] = input[i].split(' ');
  let result = '';

  for (let j = 0; j <= s.length; j++) {
    result += s.charAt(j).repeat(r);
  }
}
