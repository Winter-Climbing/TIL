const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

for (i = 1; i < input.length; i++) {
  let arr = input[i].split(" ").map((item) => +item);
  const numbers = arr[0];
  let sum = 0;
  for (j = 1; j <= numbers; j++) {
    sum += arr[j];
  }

  let test = arr.filter((item) => item > sum / numbers);
  let answer = ((test.length / numbers) * 100).toFixed(3);
  console.log(answer + "%");
}
