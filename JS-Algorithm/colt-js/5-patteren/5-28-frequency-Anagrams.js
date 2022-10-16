// 단어 철자 바꾸기
// 애너그램
// 2개의 문자열을 매개변수로 하는 함수를 만든다.
// 해당 함수의 매개변수는 서로의 값을 비교해서 같으면 true, 틀리면 false를 내뱉는다.
// 문자열의 순서는 뒤 바뀌어도 상관없다.

// a('','')  true
// a('aaz', 'zza') false
// a('qwerty', 'qeywrt') true

function anagram(str1, str2) {
  // str1의 길이와 str2의 길이를 비교해서 길이가 다르면 바로 false를 박습니다.
  if (str1.length !== str2.length) {
    return false;
  }

  let newObj1 = {};
  let newObj2 = {};
  for (let val of str1) {
    newObj1[val] = (newObj1[val] || 0) + 1;
  }
  for (let val of str2) {
    newObj2[val] = (newObj2[val] || 0) + 1;
  }
  console.log(newObj1);
  console.log(newObj2);
  return true;
}

anagram("undefind", "dnifednu");
