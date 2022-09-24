# lv1 자릿수 구하기 - 프로그래머스

<br>

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

```javascript
function solution(n) {
  // 퉤! 하고 뱉을 정답 변수(숫자 타입을 뱉을 거라고 명시적으로 0을 집어 넣는다.)
  var answer = 0;
  // 매개변수 숫자 타입 n을 문자열 타입으로 바꿔서 저장한다.
  let stringNum = `${n}`;

  // 문자열 수만큼 동작하는 반복문을 만든다.
  for (let i = 0; i < stringNum.length; i++) {
    // 문자열을 싹뚝싹뚝 짜르는 charAt매개변수를 써서 변수 ch에 할당한다.
    let ch = stringNum.charAt(i);
    // 문자열로 할당된 ch를 parseInt로 숫자로 바꾼 다음 변수 answer에 더하는 형태로 할당한다.
    answer += parseInt(ch);
  }
  console.log(ch); // 5     3      7  이라고 나온다. 타입은 문자열
  // 퉤! 하고 답을 뱉는다.
  return answer;
}

solution(537);
```

---

개선점 : 14번째 줄 ch 변수는 없어도 된다. 밑의 줄 parseInt()에 바로 집어 넣어도 충분하다.
아직까지는 차근차근 정리하면서 나아가는 수밖에 업는 것 같다.

<br>

<br>
시간복잡도 - O(n)
공간복잡도 - O(n)
<br>

---

<br>

## 다른 사람의 풀이 -1

```javascript
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}

// 자바스크립트는 ''과 다른 타입을 더하면 문자열이 된다.(String(n))
```

시간복잡도 - O(n)
공간복잡도 - O(n)

<br>

```javascript
function solution(n) {
  // 숫자풀이
  // 매개변수 n을 124라고 가정하고 풀이해보자.

  // 퉤! 하고 뱉을 변수 sum을 초기화한다.
  var sum = 0;

  // 닥치고 먼저 실행하고 보는 상남자 반복문 do while을 쓴다.
  // 그래야 순차적으로 실행했을 때 일의 자릿수 or 제일 큰 자릿수를 놓치지 않고 실행시킬 수 있다.
  do {
    // 1. 먼저 124를 10으로 나눈 나머지 값 4를 sum에 집어 넣는다. (+4)
    // 2. 그 후 n에 12.4에 내림을 한 12를 할당한다. (n = 12)
    // 3. 아직 n이 0보다 크니까 다시 do를 실행시킨다.
    // 4. sum에는 12를 10으로 나눈 나머지 값 2를 sum에 더하면서 집어 넣는다. (+4 +2)
    // 5. 1.2를 내림한 1을 n에 할당한다. (n = 1)
    // 6. 아직 n이 0보다 크니까 다시 do를 실행시킨다.
    // 7. sum에는 1을 10으로 나눈 나머지 값 1을 sum에 더하면서 집어 넣는다. (+4 +2 +1)
    // 8. 0.1을 내림하니 0이다.
    // 9. 종료
    sum += n % 10; //
    n = Math.floor(n / 10);
  } while (n > 0);
  // sum = 7 퉤!
  return sum;
}
```

시간복잡도 O(n), 공간복잡도 O(1)
