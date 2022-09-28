# 하샤드 수 - 프로그래머스

<br>

문제 설명

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

```javascript
function solution(x) {
  var answer = true;
  // 왜맞틀!을 외쳤던 구간이다.
  // do...while문으로 인해 함수 레벨단에서 x값이 요동치고 있다는 걸 눈치채지 못 했다.
  // 그 부분을 let으로 선언 후 x 값을 할당함으로써 x값이 블록 레벨 스코프로 정의되도록 만들었다.
  // 즉, do...while로 아무리 장난을 치더라도 x값은 solution함수가 호출될 때 담겨있는 인자에 의해서만 결정된다.
  let value = x;
  // 자릿수의 합이다.
  let plus = 0;

  do {
    plus += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  // x인자를 자릿수의 합으로 나눴을 때, 나오는 값에 따라 true false를 할당한다.
  if (value % plus == 0) {
    answer = true;
  } else {
    answer = false;
  }
  // x % plus === 0 ? answer = true : answer = false

  return answer;
}
```

---

개선점: 함수 레벨 스코프와 블록 레벨 스코프를 단순히 개념적으로 인지하는 것이 아니라 변수를 선언할 때 의식적으로 바라봐야겠다.

<br>

<br>
시간복잡도 O(n), 공간복잡도 O(1)
<br>

---

<br>

## 다른 사람의 풀이1

```javascript
function Harshad(n) {
  // 숫자와 문자열을 연산하면 문자열이 나온다.
  // 그렇게 생성된 문자열을 split('')으로 하나하나 따로 떼어내어 배열로 담은 뒤
  // b와 a를 더한다. (문자 앞에 붙은 +는 타입을 숫자로 변환한다는 의미다.)
  // 그렇게 나온 값이 0이면 (false)면 !에 의해 true를 반환하고 반대면 false를 반환한다.
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}
```

사실 좋은 답은 아니라고 생각한다. 타입을 불필요하게 변화시키고 있고, 그로 인해 가독성이 떨어진다.
다만, 초보자 입장에서 보면 내장함수를 익히고 타입을 자신이 원하는 방식대로 컨트롤하면서 원하는 답을 도출하는 것은 현재 나에게 없는 능력이다.

<br>
시간복잡도 - O(n)
공간복잡도 - O(n)
<br>

<br>

## 다른 사람의 풀이2

```javascript
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  // 인자가 담긴 num값에 자릿수를 더한 값 sum을 나눈 나머지가 0이면 true를 1이상이면 false를 반환한다.
  return !(num % sum);
}
```

접근은 나와 같지만 반환하는 방법이 다르다. 너무 새련됐다!!
0과 1을 이용한 true, false는 기억했다가 꼭 써먹어야겠다.

<br>

시간복잡도 - O(n)
공간복잡도 - O(1)

<br>
