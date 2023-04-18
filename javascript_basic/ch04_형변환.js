// *** 형변환 ***
// String() => 문자형으로 변환
// Number() => 숫자형으로 변환
// Boolean() => 불린형으로 변환

// prompt로 입력받을 시 모든게 문자형으로 오게됨
// const mathSocre = prompt("수학몇점?"); = 90
// const engSocre = prompt("영어몇점?"); = 80
// const result = mathScore + engScore / 2; => 4540점(/는 숫자로 자동 형변환해줌)

// console.log(result);

// 1. String();
console.log(String(3));
// 2. Number();
console.log(Number("1234"));
// 3. Boolean();
// false = 숫자 0, 빈 문자열 '', null, undefined, NaN

// ** 주의사항 **
// Number(null) // 0
// Number(undefined) // NaN
// Boolean(0) => false
// Boolean('0') => true
// Boolean('') => false
// Boolean(' ') => true

