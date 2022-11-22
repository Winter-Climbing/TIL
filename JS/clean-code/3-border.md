## 경계 다루기 (min - max)

```javascript
function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 상수
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

genRandomNumber(MIN_NUMBER, MAX_NUMBER);
// 여기서 발생하는 문제는 (포함되는지 vs 안되는지) 이다.
// 이상, 초과 vs 이하, 미만
// 따라서 사전에 컨벤션을 통일하는 것이 중요하다.
```

<br>

- 정리

1. 최소값과 최대값을 다룬다
2. 포함 여부를 결정해야 한다. (이상-초과 . 이하-미만)
3. 혹은 네이밍에 포함 여부를 작성한다 (IN 등등)

<br>

<hr>

## Begin-End

```javascript
function reservationDate(beginDate, endDate) {}

reservationDate("YYYY-MM-DD", "YYYY-MM-DD");
```

<br>

- 정리

- 대표적인 예시는 달력이다. 많은 달력 관련 라이브러리에서도 begin과 end를 사용하니 참고하자

<br>

<hr>

## First-Last

```javascript
const students = ["포코", "존", "현석"];

function getStudents(first, last) {}

getStudents("포코", "현석");
```

<br>

- 정리

- 처음과 마지막을 다 포함할 때 사용한다.

<br>

<hr>

## prefix-suffix (접두사, 접미사)

- 일종의 약속으로 리액트의 경우 hook의 접두사를 use로 사용하는 것이 대표적인 예시다.
- 굳이 라이브러리가 아니더라도 변수명, 폴더, 파일명을 지을 때도 정하면 좋다!
- 약속이기에 일관성이 중요하다!

<br>

<hr>

## 매개변수의 순서가 경계다 👍👍

```javascript
getRandomNumber(1, 50) // 1에서 50까지의 수인가? 추론 가능
getDates('2021-10-01', '2021-10-31') // 날짜구나!

function getFunc({some1, some2, some3, some4})

function getFunc(some1, some3) {
  someFunc(some1, _, some3)
}
```

<br>

- 정리

1. 매개변수를 2개가 넘지 않도록 만든다
2. arguments, rest parameter
3. 매개변수를 객체에 담아서 넘기는 것도 좋다. 객체는 순서가 없기에 필요한 것만 쏙쏙 빼서 다음 함수에서 호출할 수 있기 때문이다.
4. 랩핑하는 함수를 만들자

<br>

<hr>
