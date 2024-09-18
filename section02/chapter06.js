// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}
let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "남소미",
  age: 30,
  hobby: "게임",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  // console.log(keys[i], person[keys[i]]);
}
for (const key of keys) {
  const value = person[key];
  // console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
// console.log(values);

for (const value of values) {
  console.log(value);
}

// 2.3 for in
// -> 객체만을 위해 존재하는 특수한 방법 (객체의 키 값을 순회한다)
// for of와 헷갈리지 말기 -> for of는 배열만을 위한 것임
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
