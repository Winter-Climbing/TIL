# 문자열 내 p와 y의 개수 - 프로그래머스

<br>

문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

```javascript
function solution(s) {
  var answer = true;
  let changeStr = s.toLowerCase();

  const frequency = {};
  for (let val of changeStr) {
    frequency[val] = (frequency[val] || 0) + 1;
  }

  if (frequency.p === frequency.y) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
```

---

개선점 : for...of 문에서 객체를 담는 과정에서 불필요한 다른 문장도 들어가게 된다. 이 부분을 먼저 솎아내주는 것이 메모리 상으로 더 좋을 것 - 어떻게??

<br>

<br>
시간복잡도 O(n), 공간복잡도 O(n)
<br>

---

<br>

## 다른 사람의 풀이1

```javascript
function numPY(s) {
  //함수를 완성하세요
  return (
    // 문자열 s를 받아와 모두 대문자로 바꾼 뒤 각각 P와 Y만 뽑아 길이를 비교한다.
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
```

직관적이고 명쾌하다.
<br>
시간복잡도 - O(1)
공간복잡도 - O(n)
<br>

<br>

## 다른 사람의 풀이2

```javascript
function solution(s) {
  // ...rest로 문자열을 낱개로 만든 후 모두 소문자로 변환한 배열을 만든다.
  // 배열을 빙글빙글 도는 reduce에서 p가 나오면 누적점수 acc의 점수가 +1되고 y가 나오면 -1된다.
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === "p") return acc + 1;
    else if (cur === "y") return acc - 1;
    // 총합을 리턴한다.
    return acc;
    // 리턴한 총합이 0이면 (false면) true가 0이상이면 (true면) false가 나온다.
  }, 0)
    ? false
    : true;
}
```

배열 속의 ...spread 연산자를 쓰고, 0과 1의 bool값을 이용하는 점이 인상적이다. reduce의 매개변수를 적재적소에 쓰는 것도 물론

<br>

시간복잡도 - O(n)
공간복잡도 - O(n)

<br>
