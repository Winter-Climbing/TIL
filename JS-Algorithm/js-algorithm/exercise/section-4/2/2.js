const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((i) => i);

function solution(arr) {
  const answer = [];

  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let str of arr) {
    const num = Number(str.split("").reverse().join(""));
    if (isPrime(num)) answer.push(num);
  }

  return answer;
}

console.log(solution(input));
console.log(Math.sqrt(14));
