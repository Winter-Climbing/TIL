function solution(n) {
  let str = String(n);
  let a = str.split("").reduce((arr, cur) => {
    return +arr + +cur;
  }, 0);
  console.log(a);
}

solution(123456789101112131415); // 자바스크립트는 품을 수 없는 수라서 에러가 난다.

// 답안
let arr = [];
let sum = 0;

for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

arr.forEach((n) => {
  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
});

console.log(sum);
