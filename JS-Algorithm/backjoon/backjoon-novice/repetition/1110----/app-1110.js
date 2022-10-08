const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString();

let number = +input;
let str = number.split("");

// 입력된 수를 분리한다.
// 분리한 수를 더하여 답을 도출한다.
// 도출된 답을 문자열로 만든다.
// 도출된 답과 분리된 수의 일의 자리 수로 새로운 수를 만든다.
// 새로운 수와 기존의 수가 같은지 비교한다.
// 만약 틀리다면 사이클을 저장하는 변수에 1을 더한다.
// 맞다면 사이클에 저장되어 있는 수를 return한다.

// do {
//   sum += input % 10;
//   input = Math.floor(input / 10);
// } while (input > 0);

let sum = 0;
for (i = 0; input > 0; i++) {
  sum += input % 10;
  input = Math.floor(input / 10);
}
let newNumber = (number % 10) + "";
