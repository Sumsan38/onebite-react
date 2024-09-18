// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값 (위에 7개 빼고 전부)
let t1 = "hello";
let t2 = 123;
let t3 = []; // 배열
let t4 = {}; // 객체
let t5 = () => {}; // 화살표 함수

// 3. .활용 사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  // 값이 undefined가 아닐때만 출력
  console.log(person.name);
}

let person = { name: "남소미" };
printName(person);
