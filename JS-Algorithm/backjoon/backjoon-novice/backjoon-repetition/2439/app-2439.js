const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let num = +input;

for (let i = 0; i < num; i++) {
  let star = "";

  for (let j = num - 1; j >= 0; j--) {
    star += j <= i ? "*" : " ";
  }

  console.log(star);
}
