// Number, Math
// 1. toString()
let num = 10
// 10진수 -> 2진수
console.log(num.toString(2))
// 10진수 -> 16진수
console.log(num.toString(16))

// 2. Math.PI : 파이 값
console.log(Math.PI) // 3.141592653589793

// 3. Math.ceil() : 올림
let num1 = 5.1
let num2 = 5.7
console.log(Math.ceil(num1))
console.log(Math.ceil(num2))

// 4. Math.floor() : 내림
console.log(Math.floor(num1))
console.log(Math.floor(num2))

// 4. Math.round() : 반올림
console.log(Math.round(num1))
console.log(Math.round(num2))

// 5. 소수점 자릿수
let userRate = 30.1234
// 요구사항 : 소수점 둘째자리까지 표현(셋째자리에서 반올림)
// * round 활용
Math.round(userRate * 100)/100 // 30.12
// * toFixed() 활용
userRate.toFixed(2) // "30.12"
userRate.toFixed(0) // "30"
userRate.toFixed(6) // "30.123400"
Number(userRate.toFixed(2)) // 30.12

// 6. isNaN()
let x = Number('x') // NaN
// x == NaN // false
// x === NaN // false
// NaN == NaN // false
isNaN(x) // true
isNaN(3) // false

// 7. parseInt() - 문자랑 혼용되어 있어도 숫자만 바꾸어줌, 소수점 아래는 자름
// 단, 숫자로 시작해야 숫자로 바꾸어줌
let margin = '10px'
console.log(parseInt(margin)) // 10
console.log(Number(margin)) // NaN
let redColor = 'f3'
parseInt(redColor) // NaN
// 16진수 문자열일 경우
parseInt(redColor, 16) // 243
// 2진수 문자열일 경우
parseInt('11', 2) // 3

// 8. parseFloat()
let padding = '18.5%'
parseInt(padding) // 18
parseFloat(padding) // 18.5

// 9. Math.random() - 0~1 무작위 숫자 생성
// 1~100사이 임의의 숫자를 뽑고 싶다면?
Math.floor((Math.random()*100)+1)

// 10. Math.max(1,5,6) / Math.min(1,5,6)
// 해당 리스트에서 최대값/최솟값 구하기

// 11. Math.abs()       절대값
// 12. Math.pow(n,m)    제곱
// 13. Math.sqrt(n)     제곱근


