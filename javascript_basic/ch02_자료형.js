// 숫자를 0으로 나눈다면?
const x = 1/0;
console.log(x); // 무한대로 infinity 출력

const y = name/2;
console.log(y);
// NaN = Not a number

// boolean
// const a = true;
// const b = false;

// null(존재하지 않는 값)과 nudefined(값 할당 안됨)
let age1;
console.log(age1);

let user = null;
// 유저 존재 안함

// 객체형, 심볼형

// typeof 연산자 => 각자의 자료형 출력해줌, 다른 개발자가 사용한 변수의 타입을 알아야할 때
// null은 객체가 아니다 이건 스크립트 오류이다.
console.log(typeof 3);
console.log(typeof null);
console.log(typeof "xxx");
console.log(typeof undefined);

// 문자형 + 연산
const name1 = "mike";

const a = "나는 ";
const b = " 입니다.";

console.log(a+name1+b);

const age = 30;
console.log(a + age + "살" + b);
