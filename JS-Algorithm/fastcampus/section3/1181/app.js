const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const set = new Set(input);
const arr = [...set];

arr.shift();

const sorting = (a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
  }
};

arr.sort(sorting);

for (let i of arr) {
  console.log(i);
}
