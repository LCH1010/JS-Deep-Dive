// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당
var x = 2;
var result;

if (x % 2) {
  // 2 % 2는 0, 이때 0은 false로 암묵적 강제 변환된다.
  result = '홀수';
} else {
  result = '짝수';
}
console.log(result);

var x = 2;

// 0은 false로 취급
var result = x % 2 ? '홀수' : '짝수';
console.log(result);

var num = 2;

// 0은 false로 취급
var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind);

dd;
