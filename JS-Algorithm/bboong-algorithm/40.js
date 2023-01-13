// # 문제40 : 놀이동산에 가자

// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.

// **원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.**

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

// 입력
// 50 - 제한무게
// 5 - 탑승 인원
// 20 - 여기서 밑에까지 탑승하는 인원들의 몸무게
// 20
// 20
// 20
// 20

// 출력
// 2

function solution(n) {
  let arr = n.split("/n").map((item) => +item);
  let limit = arr[0]; // 50
  let friends = arr[1]; // 5

  for (i = 2; i < arr.length; i++) {
    let answer = 0;
    let testArr = [];
    answer += arr[i];
    testArr = arr[i];
    if (answer > 50) {
      return false;
    } else {
      return answer.length;
    }
  }
  //
}

// 답안
let total = 0;
let count = 0;
const limit = prompt("제한 무게를 입력하세요.");
const n = prompt("인원수를 입력하세요.");

for (let i = 1; i <= n; i++) {
  total += parseInt(prompt("무게를 입력해주세요."), 10);
  if (total <= limit) {
    count = i;
  }
}

console.log(count);

// count가 필요하니 해당 변수를 선언하면 되는 것이어따..
