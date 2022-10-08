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
// 상수가 있는지 파악하고 상수가 있으면 변수를 할당하여 요리조리 만져보자.
minute -= 45;

if (minute < 0) {
  // 1시간은 60분이다. 상수는 이렇게 암묵적으로 주어지기도 한다.
  minute += 60;
  hour--;

  if (hour === -1) {
    hour = 23;
  }
}

console.log(`${hour} ${minute}`);
