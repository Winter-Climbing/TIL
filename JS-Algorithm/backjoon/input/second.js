const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

input = input.split("\n");
console.log(input);

const testCaseNum = +input[0];
console.log(testCaseNum);
for (let i = 1; i < testCaseNum; i++) {
  const arr = input[i].split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Number(arr[i]));
  }
  console.log("arr : ", arr);
  console.log("newArr : ", newArr);
}
solution(input[0], input[1]);

function solution(A, B) {
  // Write your code
  // console.log(A + B);
}
