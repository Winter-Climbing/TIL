const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const first = input[0].split(' ').map((i) => +i);
let hour = first[0];
let minutes = first[1];
let second = +input[1];

if (minutes + second >= 60) {
  hour += Math.floor((minutes + second) / 60);
  minutes = Math.floor((minutes + second) % 60);
  if (hour == 24) hour = 0;
  return console.log(`${hour} ${minutes}`);
} else {
  minutes += second;
  return console.log(`${hour} ${minutes}`);
}
