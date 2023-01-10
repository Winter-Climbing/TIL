let a = [10, 11, 12, 13, 14, 15];

// function forEach(콜백함수(value, idx, array), thisArg) {
//   for (let i = 0; i < a.length; i++) {
//     콜백함수(a[i], i);
//   }
// }

a.forEach(
  function (value, idx) {
    console.log(value, idx, this);
  },
  [1, 2]
);

// function map(콜백함수(value, idx, array), thisArg) {
//   let list = []
//   for (let i = 0; i < a.length; i++) {
//     list.push(콜백함수(a[i], i))
//   }
//   return list
// }

let mapAnswer = a.map(
  function (value, idx) {
    return value * value;
  },
  [1, 2]
);
// console.log(mapAnswer);

// function filter(콜백함수(value, idx, array), thisArg) {
//   let list = []
//   for (let i = 0; i < a.length; i++) {
//     if (콜백함수(a[i], i) list.push(a[i]))
//   }
//   return list
// }

let filterAnswer = a.filter(
  function (value, idx) {
    return value % 2 === 0;
  },
  [1, 2]
);
// console.log(filterAnswer);

// function reduce(콜백함수(previousValue, currentValue, currentIndex, array), initialValue) {
//  let result = initialValue
//   for (let i = 0; i < a.length; i++) {
//     result = 콜백함수(result, a[i])
//   }
//   return result
// }

let reduceAnswer = a.reduce(function (acc, value) {
  return acc + value;
}, 0);
console.log(reduceAnswer);
