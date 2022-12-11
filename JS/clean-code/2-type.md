## 타입 검사

```javascript
// 원시 데이터는 typeof로 충분히 타입 검사가 가능하다.
typeof "문자열"; // 'string'

// 반면 참조 데이터는 typeof로 타입 검사할 시 예상치 못한 동작이 발생할 수 있다.
function test() {} // typeof - function
class MyClass {} // typeof - function
```

```javascript
// instanceof
// 프로토타입 체인을 활용해 왼편의 객체가 오른쪽 객체의 자식이 맞는지 확인 후 true, false 반환
// 문제는 참조형 데이터의 경우 가장 윗 조상이 Object이기 때문에 Object와 비교하면 항상 true가 나와버린다.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = { name: "poco", age: 99 };

const poco = new Person("poco", 200);

poco instanceof Person; // true
p instanceof Person; // false

// 99% 해결법 (만능은 아니다.)
Object.prototype.toString.call(new String("")); // '[object string]'
```

<br>

- 정리

* js는 동적인 타입이기 때문에 타입 검사가 참 어렵다
* 따라서 스택오버플로우를 통해 (ex - javascript is array) 잘 찾아보자
* 외우지는 말자

<br>

<hr>

## undefined & null

```javascript
// null의 타입은 Object다 이것은 대표적인 js 오류다.
!null; //  true
!!null; // false

// null => math => 0
null + 123; // 123

// undefined의 타입은 undefined다.
// 선언했지만 값은 정의되지 않았다
let varb;
typeof varb; //

// undefined => math => NaN
undefined + 10; // NaN
```

<br>

- 정리

- undefined는 값이 정의되지 않았다는 뜻이다.
- null 값이 정의되지 않았다는 것을 명시적으로 표현한 것이다.

<br>

<hr>

## eqeq줄이기 (동등연산자 equality의 줄임말 eq)

```javascript
// ==은 의도하지 않은 형변환을 일으켜 비교한다.
// 즉 위험하다.

"1" == 1; // true
1 == true; // true
```

<br>

- 정리

- Eslint와 같은 tool을 이용해서 eqeq의 사용을 제한하도록 하자

<br>

<hr>

## 형변환 주의하기

```javascript
// 래퍼객체를 이용하여 명시적으로 형 변환을 하자

String(11 + "문자와 결합");

Boolean("문자열");
Boolean("");
Number("11");

// parseInt의 경우 두 번째 매개변수 자리에 꼭 10을 쓰자
// 10진수가 기본값이 아니기 떄문!
parseInt("9.999", 10);
```

<br>

- 정리

- 사용자가 형 변환을 했을 때는 명시적으로 작성하자
- 암묵적 형 변환 👎👎👎

<br>

<hr>

## isNaN

- 사람은 10진수, 컴퓨터는 2진수에 능하다.
- 그 때문에 여러 문제가 발생하고 특히, 컴퓨터가 소수를 표현하는데 문제를 겪고 있다.
- 이를 해결하기 위해 JS는 IEEE 754라는 부동소수점 표기법을 채택했다.

```javascript
// isNaN은 in Not A Number라는 뜻이다.

isNaN(123); // false, 123은 숫자가 아닌 것이 아니다!

// ES2015+

isNaN; // 느슨한 검사
Number.isNaN; // 엄격한 검사 👍👍👍👍
```
