// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

function 제곱(a, b, c) {
  return a ** c;
}

제곱(2, "", 3);

// 답안

let x = "2 3";
const n = x.split("");
console.log(n);

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
