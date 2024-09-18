console.log(1);

// 특정 시간 후에 함수 진행
// web APIs - 웹 브라우즈 내의 Web APIs 영역에 타이머를 등록하고,
// Web APIs는 3000ms가 지나면 자바 스크립트 엔진에 콜백을 전달한다.
// 자바 스크립트 엔진은 전달받은 콜백을 실행한다.
setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
