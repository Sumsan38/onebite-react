// 1. 배열 구조 분해 할당
let arr = [1, 2, 3];

// 기존 방식
// let one = arr[0];
// let two = arr[1];
// let thrww = arr[2];

// 새로운 방식
let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "남소미",
  age: 29,
  hobby: "테니스",
};

// 기존 방식
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

let { name, age: myAge, hobby, extra = "추가" } = person;
// console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할등을 이용해서 함수의 매개 변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
// func(10); // 이건 당연히 안된다
