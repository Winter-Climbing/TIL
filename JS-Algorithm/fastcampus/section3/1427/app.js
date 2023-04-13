const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('');

const textArr = input.sort((a, b) => b - a).join('');

console.log(textArr);
