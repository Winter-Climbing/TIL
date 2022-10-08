const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => +item);

// 구조분해할당이 가능하다!!!!!!!!
// let [a, b, c] = [input[0], input[1], input[2]]
let x = input[0];
let y = input[1];
let z = input[2];

solution(x, y, z);

function solution(a, b, c) {
  if (a == b && b == c) {
    console.log(10000 + a * 1000);
    // || 비교연산자로 충분히 줄일 수 있었다.
    // a == b || a == c || b == c
  } else if (a == b) {
    console.log(1000 + a * 100);
  } else if (a == c) {
    console.log(1000 + a * 100);
  } else if (b == c) {
    console.log(1000 + b * 100);
  } else {
    // 최댓값을 Math.max가 아니더라도 그 전에 값을 오름차순으로 정렬하여 마지막 요소를 가지고 오는 것도 방법이다.
    let max = Math.max.apply(null, input);
    console.log(max * 100);
  }
}
