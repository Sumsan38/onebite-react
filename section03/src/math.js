// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// 기본값으로 내보내진 함수
export default function multiply(a, b) {
  return a * b;
}

// 아래처럼 내보낼 수도 있다.
// export { add, sub };
