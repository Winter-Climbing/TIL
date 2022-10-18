// 지금까지는 단일 재귀함수를 작성했다.
// 헬퍼 재귀함수는 재귀적이지 않은 일반 함수 안에 재귀 함수를 집어 넣는 구조를 뜻한다.

// dragon 문제다!! - 요소가 홀수로만 이루어진 배열
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
