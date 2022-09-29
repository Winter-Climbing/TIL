const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseNum = +input[0]; // +를 붙이면 Number와 같은 효과를 낸다.
console.log("testCaseNum : ", testCaseNum);

for (let i = 1; i <= testCaseNum; ++i) {
  const arr = input[i].split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr.push(+arr[i]);
  }
  console.log("arr : ", arr);
  console.log("newArr : ", newArr);
}
