// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

// 1.1 배열을 순회하면서 새로운 배열에 값을 채워넣음
let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메소드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(2); // true, false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 1을 반환함
let arr4 = [2, 2, 2];
let index2 = arr3.indexOf(2); // 0을 반환함 (첫번째로 찾은 인덱스)
let index3 = arr3.indexOf(20); // 없으면 -1을 반환함

// 4. findIndex
// 모든 요소를 순화하면서, 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr5 = [1, 2, 3];
const findedIndex = arr5.findIndex((item) => {
  // 1번쨰 인덱스가 반환된다
  if (item === 2) return true;
});
const findedIndex2 = arr5.findIndex((item) => item % 2 !== 0); // 0번째 인덱스가 반환된다

// indexOf vs findIndex
// 단순 원시 타입 찾을때 indexOf, 객체의 프로퍼티를 찾아낼때 findIndex
let objectArr = [{ name: "test1" }, { name: "test2" }];
const findObjectByIndexOf = objectArr.indexOf({ name: "test1" }); // 얕은 복사라 특정 객체값을 찾아낼 수 없음. 이럴때 findIndex를 써야함
const findObjectByFindIndex = objectArr.findIndexf(
  (item) => item.name === "test1"
); // 이건 찾아낼 수 있음

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환하낟.
let arr6 = [{ name: "test1" }, { name: "test2" }];
const finded = arr6.find((item) => item.name === "test1");
console.log(finded);
