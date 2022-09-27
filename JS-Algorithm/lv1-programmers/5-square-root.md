# lv1 정수 제곱근 판별 - 프로그래머스

<br>

문제 설명
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

ex) n = 121, return 144 && n = 3, return = -1

```javascript
function solution(n) {
  var answer = 0;
  // 루트를 씌울 경우 양의 정수 x의 제곱이라면 n과 같은 양의 정수가 나올 것이고
  // 루트를 씌울 경우 소수가 나온다면 n과 다른 수가 도출된다.
  let x = parseInt(Math.sqrt(n));

  n === x ** 2 ? (answer = (x + 1) ** 2) : (answer = -1);
  console.log(x);
  return answer;
}
```

---

개선점: 맘에듦

<br>

<br>
시간복잡도 - O(1)?
공간복잡도 - O(1)
<br>

---

<br>

## 다른 사람의 풀이

```javascript
function nextSqaure(n) {
  var result = 0;
  var x = 0;
  // x는 n보다 1 작은 제곱수 or 같은 수가 될 때 까지 커져간다.
  while (x * x < n) {
    x++;
  }
  // 그렇게 커진 x와 n을 비교하여
  if (x * x == n) {
    // x와 n이 같으면 x에 1을 더한 후 제곱한 값을 result에 담아 return 하고
    x++;
    result = x * x;
  } else {
    // x와 n의 값이 다르면 no를 리턴한다.
    result = "no";
  }

  return result;
}
```

단순한 문법으로 잘 풀어낸 답안 같다.

시간복잡도 - O(n)
공간복잡도 - O(n)

<br>

---

<br>

```javascript
function nextSqaure(n) {
  // n에 루트를 씌운 후 나머지가 0인지 아닌지 판별하는 조건문이다.
  switch (n % Math.sqrt(n)) {
    // 0이면
    case 0:
      // Math.pow(a, b)의 경우 a는 제곱할 수, b는 b승을 뜻한다. - a ** b
      return Math.pow(Math.sqrt(n) + 1, 2);
    // 0이 아니면
    default:
      // no!
      return "no";
  }
}
```

나와 비슷하지만 조건문 switch 안에 모든 값을 썼다. 정리되어 있다는 점에서는 좋은 점수를 줄 수 있겠다.
<br>

시간복잡도 - O(n)
공간복잡도 - O(n)
