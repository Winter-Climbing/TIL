const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

let n = input[0];

for (let i = 1; i < 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
