const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath));

let count = 0;

for (let i = 1; i <= input; i++) {
  i < 100 && count++;
  let str = i.toString();

  let x = +str[0] - +str[1];
  let y = +str[1] - +str[2];
  x === y && count++;
}

console.log(count);
