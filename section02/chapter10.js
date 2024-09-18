// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 (한국 표준 - 현재 시간을 저장)

let date2 = new Date("1997-01-07"); // '-'대신에 '. ', '/' 사용 가능
let date2time = new Date("1997/01/07/10:10:10");
let date2dot = new Date(1997, 1, 7, 23, 59, 59);

// 2. 타임 스탬프
// 특정 시간이 '1970.01.01 00시 00분 00초(협정세계시, UTC)'로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();

let date4 = new Date(ts1);
let check = date1 === date4;

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // month는 0부터 시작
let date = date1.getDate();
let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
// get이 아닌 set
date1.setFullYear(2023);
date1.setMonth(1); // 2월

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Thu Mar 30 2023
console.log(date1.toLocaleString()); // 2023. 3. 30 오후 11:59:59
