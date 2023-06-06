// 문자열 연결 연산자
const a = '1' + 2; // 12
const a1 = 1 + '2'; // 12

console.log(`a : ${a} / a1: ${a1} `);

// 산술 연산자
1 + 2; // 3

// true는 1로 타입 변환된다.
1 + true; // 2;

// false는 0으로 타입 변환된다.
1 + false; // 1

// null은 0으로 타입 변환된다.
1 + null; // 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // -> NaN
1 + undefined; // NaN
