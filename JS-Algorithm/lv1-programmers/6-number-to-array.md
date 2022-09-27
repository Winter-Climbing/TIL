# lv1 자연수 뒤집어 배열로 만들기 - 프로그래머스

<br>

문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

ex) n = 12345, return = [5, 4, 3, 2, 1]

```javascript
function solution(n) {
  var answer = [];

  do {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return answer;
}
```

---

십진수를 이용한 풀이, 더 이상 설명 안 함

<br>

<br>
시간복잡도 O(n), 공간복잡도 O(n)
<br>

---

<br>

## 다른 사람의 풀이

```javascript
function solution(n) {
  return n
    .toString() // 숫자 n을 문자열로 바꾸고
    .split("") // n을 간격 없이 붙이고 배열로 바꾼다.
    .reverse() // 배열의 요소를 거꾸로 뒤집는다.
    .map((item) => (item = parseInt(item))); // 배열 속의 요소를 숫자 타입으로 변환 후 배열 속에 차례대로 담는다.
}
```

현재 내가 가장 잘 못하는 풀이 방법이다. 배열, 숫자, 문자 타입을 막 자유자재로 조물딱조물딱 거리는 스킬...
언제까지 못 한다고만 할 수는 없으니 관련 내장함수들을 잘 살펴 봐야지
<br>
시간복잡도 - O(n)
공간복잡도 - O(n)
<br>
