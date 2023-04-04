const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arr = input[1].split(' ').map((i) => +i);

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);

let test = arr.sort((a, b) => a - b);

console.log(`${test[0]} ${test[test.length - 1]}`);
