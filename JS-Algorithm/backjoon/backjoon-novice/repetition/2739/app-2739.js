const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let handleNumber = Number(input);

for (i = 1; i <= 9; i++) {
  let answer = 0;
  answer = handleNumber * i;
  console.log(`${handleNumber} * ${i} = ${answer}`);
}
