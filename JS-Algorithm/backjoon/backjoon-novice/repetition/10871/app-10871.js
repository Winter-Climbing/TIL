const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let first = input[0].split(" ").map((item) => +item);
let second = input[1].split(" ").map((item) => +item);

let 답 = [];
for (i = 0; i <= first[0]; i++) {
  if (second[i] < first[1]) {
    답.push(second[i]);
  }
}

console.log(답.join(" "));

// 다른 풀이

let max = Number(input[0].split(" ")[1]);
let arr = input[1].split(" ").map((x) => Number(x));

const answer = arr.filter((v) => max > v);

console.log(answer.join(" "));
