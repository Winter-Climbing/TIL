# lv1 약수의 합 - 프로그래머스

<br>

```javascript
function solution(n) {
  var answer = 0;
  // 정수 i <= n을 담을 배열 arr을 만든다.
  var arr = [];
  // arr1에는 arr에 담긴 요소들을 if문으로 걸러 n의 약수만으로 이루어진 배열을 만든다.
  var arr1 = [];
  // arr배열에 정수 i <= n을 담는다.
  for (i = 1; i <= n; i++) {
    arr.push(i);
  }

  // 정수 n이 담긴 arr 배열의 요소들 중에 나머지가 0인 수를(약수) arr1 배열에 담는다.
  arr.forEach((item) => {
    if (n % item == 0) {
      arr1.push(item);
    }
  });

  // n의 약수가 담긴 arr1 배열의 값들을 answer에 더 한다.
  arr1.forEach((item) => {
    answer += parseInt(item);
  });

  return answer;
}
```

---

개선점: 다른 사람들의 풀이와 비교해 보면 불필요하게 문제들을 나눠놨다. (다른 사람 풀이 참조)

n이하의 정수로만 이루어진 변수 arr을 만든 뒤, arr에서 약수만 담긴 arr1을 만들고, arr1의 값을 answer로 다 넣어 답을 도출하는 식의 작업은 너무 불필요하게 값들을 다 저장하는 느낌이다. - 애초에 arr과 arr1은 없어도 되는 변수이며 객체인 배열을 선언함으로써 불필요한 메모리 값을 너무 많이 잡아 먹었다.

다만, 현 시점에서는 단계들을 하나하나 나눠서 절차적으로 풀어나가는 것이 나을 수도 있겠다라는 생각도 든다. 현재로는 나쁘지 않은 답이라도 점차적으로 코드를 축약하고 메모리를 절약하는 방법을 계속 염두하면서 공부해야겠다.
<br>

<br>
시간복잡도 - O(n)
공간복잡도 - O(n)
<br>

---

<br>

## 다른 사람의 풀이

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수를 구현하라

```javascript
function solution(num) {
  let sum = 0;
  // num의 값 만큼 i를 반복하여 n이하의 정수 i를 뽑아낸다.
  // 뽑아낸 n이하의 정수 i를 if문에 집어 넣어 정수 n의 약수를 골라낸 뒤 변수 sum에 더 한다.
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i;
  }

  return sum;
}
```

시간복잡도 - O(n)
공간복잡도 - O(1)
