## 전역 공간 최소화

- 전역변수 x
- 지역변수 o
- window, global 조작 x
- const, let ok
- IIFE, Module, Closure를 이용해서 스코프 분리

<hr>

## 임시 변수 제거하기

<br>

👎 이유?

- 명령형으로 가득한 로직
- 어디서 어떻게 이뤄지는지 파악하기 힘들어 디버깅이 힘들다
- 추가적인 코드를 통해 함수가 비대해질 가능성이 높다 (유지보수가 어렵다.)

<br>

👍 해결책

- 함수나누기
- 바로 반환
- 고차함수 map, filter, reduce
- 선언형(다음 섹션)

```javascript
function getElement() {
  const result = {}; // 함수가 커진다면 임시변수가 사실상 전역변수처럼 사용될 수 있다!!

  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");
  result.value = document.querySelector(".value");

  return result;
}

// 임시변수를 선언하는 순간, 임시변수에 접근해서 CRUD를 하고 싶다는 욕망을 억제하기 힘들다.
// 그래서 그냥 이렇게 객체만 반환함으로써 사이드 이펙트를 최소화시켰다.
function getElement() {
  const result = {
    return {
      title = document.querySelector(".title")
      text = document.querySelector(".text")
      value = document.querySelector(".value")
    }
  }
}

//

// 이렇게 작성할 경우 기획의 변경으로 추가 로직이 생길 경우 많은 에러사항들이 생길 수 있다.
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;

  return {
    month,
    day,
    hour,
  };
}

// 임시 변수에 값을 할당한 후 return하는 것이 아니라 해당 값을 바로 return 한다.
function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.Hours();

  return {
    month: month >= 10 ? month : "0" + month,
    day: day >= 10 ? day : "0" + day,
    hour: hour >= 10 ? hour : "0" + hour,
  };
}

// 그렇게 되면 여러 로직(여기서는 '분 전'이라는 글을 덧 붙이는 로직)을 추가하더라도 간단하게 추상화 시켜 작성할 수 있다.
function getDateTimeAddText() {
  const currentDateTime = getDateTime(new Date())

  return {
    month: currentDateTime.month + ' 분 전',
    day: currentDateTime.day + ' 분 전',
    hour:currentDateTime.hour + ' 분 전'
  }
}
```

<hr>
<br>

## 호이스팅 주의하기

- 호이스팅은 런타임시 선언과 할당을 분리해 선언을 최상단으로 끌러 올리는 것을 뜻한다.

<br>

- 해결 방법
- var를 쓰지 않는다.
- 함수표현식을 사용한다.
