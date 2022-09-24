# lv1 평균 구하기 - 프로그래머스

<br>

문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

```javascript
function solution(arr) {
  var answer = 0;
  // 배열을 a로 복사해온다. (굳이 필요 없는 작업이다. 매개변수 arr을 바로 가져다 쓰면 그만이다.)
  let a = [...arr];
  // answer에 평균값을 넣어야 되기 때문에 절차적으로 한 번 선언해야 한다.
  let sum = 0;
  // a 배열을 빙글빙글 돌면서 모든 값을 sum에 더한 형태로 넣어준다.
  a.forEach((item) => {
    sum += item;
  });
  // answer에 sum과 a 배열의 길이(요소의 수)를 나눔으로 평균값을 넣어준다.
  answer = sum / a.length;

  // 답을 리턴한다.
  return answer;
}
```

---

개선점: arr 매개변수를 복사해 올 이유가 없다.

<br>

<br>
시간복잡도 - O(n)
공간복잡도 - O(n)
<br>

---

<br>

## 다른 사람의 풀이

```javascript
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// reduce 메소드를 이용하여 아주 쉽게 문제를 해결했다.
// reduce 메소드는 reducer함수를 호출하고 다양한 인자를 받을 수 있다.
// 여기서 사용된 것은 모든 배열의 요소들을 합치는데 사용되었다.
```

시간복잡도 - O(n)
공간복잡도 - O(n)
