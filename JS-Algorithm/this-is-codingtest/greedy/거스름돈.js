// p.87
// 해당 문제가 그리디 알고리즘으로 접근할 수 있었던 까닭은 가지고 있는 동전 중에서 큰 단위가 항상 작은 단위의 배수이므로 작은 단위의 동전들을 종합해 다른 해가 나올 수 없기 때문이다.

// 그리디 알고리즘에서 가장 중요한 것은 해당 문제를 그리디로 접근하는 것이 정당한지 판별하는 것이다.

const input = [500, 100, 50, 10];

function solution(num, money) {
  const answer = [];

  for (i = 0; i < money.length; i++) {
    answer.push(~~(num / money[i]));
    // num -= input[i] * ~~(num / money[i]);
    num %= input[i];
  }

  return answer;
}

console.log(solution(1260, input));
