const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => +item);

let hour = +input[0];
let minute = +input[1];

// -45분은 필연!
minute -= 45;

if (minute < 0) {
  minute += 60;
  hour--;

  if (hour === -1) {
    hour = 23;
  }
}

console.log(`${hour} ${minute}`);
