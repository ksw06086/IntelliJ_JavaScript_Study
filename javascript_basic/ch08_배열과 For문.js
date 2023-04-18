// **** Array 배열에 대한 것([]로 함) ****
let students = ['철수', '영의', '와우'];
// 값 찾기 : students[0]

// * 배열의 특징
// 문자 뿐 아니라 숫자, 객체, 함수 등도 포함할 수 있음
// length - 배열의 길이 반환
// 메소드
// 1) push -> 뒤에서 추가
// 2) pop -> 뒤에서 삭제
// 3) unshift -> 앞에서 추가(여러개 추가 가능)
// 4) shift -> 앞에서 삭제

// ㅁ 배열과 for문
let days = ['월', '화', '수'];
for(let index = 0; index < days.length; index++){
    console.log(days[index]);
}

// ㅁ 배열과 for .. of -> for .. in은 단점이 많아 권장 안함(사용은 가능함)
for(let day of days){
    console.log(day);
}