const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr1 = input[0].split(" ").map((i) => +i);
const arr2 = input[1].split(" ").map((i) => +i);

function solution(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item)).sort((a, b) => a - b);
}

// console.log(solution(arr1, arr2));

function solution2(arr1, arr2) {
  let answer = [];
  let p1 = (p2 = 0);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else {
      p1 < p2 ? p1++ : p2++;
    }
  }

  return answer;
}

console.log(solution2(arr1, arr2));
