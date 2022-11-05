function linearSearch(array, num) {
  // add whatever parameters you deem necessary - good luck!
  for (i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}

return array.forEach(element, (idx) => (element === num ? array.idx : -1));

console.log(linearSearch([10, 15, 20, 25, 30], 30));
