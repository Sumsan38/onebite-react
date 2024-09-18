// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7); // 추가한 뒤에 변경된 배열 길이를 반환한다

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop;

// 3. shift 메서드
// 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메소드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); // 추가한 이후의 변경된 배열 길이를 반환한다
// 3, 4번 메소드는 1, 2 배열보다 늦게 동작한다.

// 5. slice
// 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // [3, 4, 5]를 잘라냄
// 잘라낸다고 해도 원본 배열이 변경되진 않는다
let sliced2 = arr5.slice(3); // 3번쨰 인수부터 배열의 끝까지 잘라낸다 // [4, 5]
let sliced3 = arr5.slice(-1); // 뒤에서부터 하나만 자른다는 뜻

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7); // [1, 2, 3, 4]
