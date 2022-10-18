// Recursive Version
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    // return으로 함수의 base case를 작성해줘야 한다. 그렇지 않으면 함수가 계속해서 작동한다.
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3);

// Iterative Version
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}
