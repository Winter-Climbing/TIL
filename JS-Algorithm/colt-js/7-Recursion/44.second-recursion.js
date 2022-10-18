function sumRange(num) {
  // base case다
  if (num === 1) return 1;
  // different input - 자기 자신에 해당하는 함수 sumRange에 num - 1을 주면서 input에 다른 값을 주고 있다.
  return num + sumRange(num - 1);
}

sumRange(4);
