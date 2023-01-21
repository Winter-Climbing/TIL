const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +input[0];
const cars = input[1].split(" ").map((item) => +item);

function solution(num, cars) {
  let answer = 0;

  cars.filter((car) => car % 10 === num && answer++);

  return answer;
}

console.log(solution(num, cars));
