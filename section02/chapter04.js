// 1. Spread 연산자 (...)
// -> Spread: 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// 위의 객체를 arr2 배열에 4, 1, 2, 3, 5, 6, 이런 식으로 변경하고 싶다.
// - 기존
// arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
// - 신규
arr2 = [4, ...arr1, 5, 6];
// console.log(arr2);

// 객체에도 사용 가능
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
// console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개 변수
// -> Rese: 나머지 / 나머지 매개변수 (배열 형태로 매개 변수로 전달된다)
function funcB(one, ...rest) {
  console.log(one); // 첫번째로 전달된 값은 one이라는 값이 된다
  console.log(rest);
}
funcB(...arr1);
