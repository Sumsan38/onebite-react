/* 1. Number Type */
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); // 나머지 구하는 연산 - 모듈러 연산

let inf = Infinity; // 무한
let mInf = -Infinity; // 마이너스 무한

let nan = NaN; // 수치 연산이 실패했을때의 결과값
// console.log(1 * "hello"); // 여기서도 NaN

/* 2. String Type */
let myName = "인간";
let myLocation = "목동";
let introduce = myName + myLocation;
// console.log(introduce);

// 아래와 같은 문법을 템플릿 리터럴 문법이라고 한다
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // ${} 값을 사용해 동적으로 문자열을 replace 할 수 있다
// console.log(introduceText);

/* 3. Boolean Type */
let isSwitchOn = true;
let isEmpty = false;

/* 4. Null Type (아무것도 없다) */
let empty = null;

/* Undifined Type (아무것도 할당 되지 않음) */
let none;
console.log(none);
