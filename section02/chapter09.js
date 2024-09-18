// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "남소미", hobby: "테니스" },
  { name: "이정환", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];
const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2;
});
// 이름들만 모아서 반환해준다
let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// let arr3 = ["b", "a", "c"];
// arr3.sort();
let arr3 = [10, 3, 5]; // 이건 정렬이 안된다 ('사전순' 정렬이라 할 수 없음)
/* 오름차순 정렬 */
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 둔다 (오름차순)
    return 1;
  } else if (a < b) {
    // a가 b에 앞에 와라
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드 (sort와 기능은 같다)
let arr4 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "ho", "hee"];
const joined = arr6.join(); // 'hi,ho,hee'로 출력된다
const joined2 = arr6.join("-"); // 'hi-ho-hee'
