const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString();

let question = input.toUpperCase(); // 주어지는 input을 대문자로

const frequency = {}; // 빈도수 패턴으로 접근하기 위해 객체 생성
const arr = []; // 객체의 value를 담기 위한 배열

// 대문자로 변환된 question의 각 문자를 key로 잡고 반복되서 나타나는 key가 나올 때마다 1씩 더함
for (let val of question) {
  frequency[val] = (frequency[val] || 0) + 1;
}

// 객체로 만들어진 frequency의 value로만 이루어진 배열 arr을 만듦
for (let val in frequency) {
  arr.push(frequency[val]);
}

// value로만 이루어진 배열 arr의 최댓값을 뽑음
const maxValue = Math.max(...arr);

// 객체 frequency의 key 중에 maxValue와 같은 key를 담는다.
const maxKey = Object.keys(frequency).find(
  (key) => frequency[key] === maxValue
);

// indexOf의 값과 lastIndexOf의 값이 다르다면 중복된 값이 있다고 판단하여 ?를 출력한다.
console.log(arr.indexOf(maxValue) !== arr.lastIndexOf(maxValue) ? "?" : maxKey);
