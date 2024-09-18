/* 1. 단순 출력 */
// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수
//   // executor

//   setTimeout(() => {
//     console.log("안녕");
//     resolve("success"); // 성공 상태로 바꾸는 함수
//     // reject("왜 실패했는지 이유..."); // 실패 상태로 바꾸는 함수
//   }, 2000);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

/* 2.promise channing */
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const num = 10;
//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num이 숫자가 아닙니다.");
//     }
//   }, 1000);
// });

// // promise를 다시 반환한다 (then, catch 모두 빌더 패턴처럼..)
// promise
//   .then((value) => {
//     // then 메서드
//     // -> 그 후에 (resolve 완료 시 전달)
//     console.log(value);
//   })
//   .catch((error) => {
//     // catch
//     // reject 된다면 여기서 받는다
//     console.log(error);
//   });

/* 3. promise 함수화 */
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    // 위에서 return한 add10(result)에 대한 then이다
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
