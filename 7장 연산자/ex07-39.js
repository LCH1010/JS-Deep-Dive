console.log(2 ** 2); // 4
console.log(2 ** 2.5); // 5.65685424949238
console.log(2 ** 0); // 1
console.log(2 ** -2); // 0.25

// 지수 연산자가 도입되디 이전에는 Math.pow  method를 사용함
Math.pow(2 ** 2); // 4
Math.pow(2 ** 2.5); // 5.65685424949238
Math.pow(2 ** 0); // 1
Math.pow(2 ** -2); // 0.25

// 지수 연산자는 다음과 같은경우 Math.pow 메서드보다 가독성이 좋다.
2 ** (2 ** 2); // 16
Math.pow(Math.pow(2, 2), 2); // 16

// 음수를 거듭제곱의 밑으로 사용해 계산하려면 다음과 같이 괄호로 묶어야함

// -5 ** 2; // SyntaxError : Unary operator used immediately before exponentiation expression
(-5) ** 2; // 25

// 지수 연산자는 다른 산술 연산자와 마찬가지고 할당 연산자와 함게 사용할 수 있다.
var num = 5;
num **= 2; // 25

// 지수 연산자는 이항 연산자 중에서 우선순위가 가장 높다
2 * 5 ** 2; // 50
