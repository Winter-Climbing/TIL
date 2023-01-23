const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  let answer = 0;
  let arr1 = arr[1].split(" ").map((i) => +i);
  let arr2 = arr[2].split(" ").map((i) => +i);
  let arr3 = arr[3].split(" ").map((i) => +i);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] < arr1[j] && arr2[i] < arr2[j] && arr3[i] < arr3[j]) {
        console.log(i, j);
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(input));
