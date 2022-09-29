// # 문제28 : 2-gram

// **2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// 입력
// Javascript

// 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

function gram(a) {
  let start = a[0];
  let zero = 0;
  for (j = 1; j < a.length; j++) {
    let moving = a[j];
    start = a[zero++];
    console.log(`${start} ${moving}`);
  }
}

gram("javascript");

// 답안
const data = prompt("문자를 입력하세요.");

for (let i = 0; i < data.length - 1; i++) {
  console.log(data[i], data[i + 1]);
}
