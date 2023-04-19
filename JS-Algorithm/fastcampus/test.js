function sum(num1) {
  return function num2(num2) {
    return function num3() {
      return num1 + num2;
    };
  };
}

console.log(sum(1)(2)());

function createBase(baseNumber) {
  return function (n) {
    return baseNumber + n
  }
}
