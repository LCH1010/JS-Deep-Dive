var x = 2;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

var x = 2,
  result;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환
if (x % 2) result = '홀수';
else result = '짝수';

console.log(result); // 짝수

// 삼항 조건 연산자 표현식은 if... else 문과 중요한 차이가 있다. 삼항 조건 연산자 포현식은 값처럼 사용 할 수 있지만 if ... else 문은 값처럼 사용할 수 없다.
// if... else 문은 표현식이 아닌 문, if ... else 문은 값처럼 사용할 수 없다.
var x = 10;
// var result = if (x%2) {result ='홀수';} else {result ='짝수'}; // SyntaxError : Unexpected token if

var x = 10;

// 삼항 조건 연산자 표현식은 표혀식의 문, 따라서 값처럼 사용할 수 있음
var result = x % 2 ? '홀수' : '짝수';
console.log(result);
