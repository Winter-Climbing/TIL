const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let currentTime = input[0].split(" ").map((item) => +item);
let cookingTime = +input[1];
console.log(currentTime);
console.log(cookingTime);

currentTime[1] += cookingTime;

if (currentTime[1] >= 60) {
  currentTime[0] += Math.floor(currentTime[1] / 60);
  currentTime[1] %= 60;
}
if (currentTime[0] > 23) {
  currentTime[0] -= 24;
}

console.log(`${currentTime[0]} ${currentTime[1]}`);
