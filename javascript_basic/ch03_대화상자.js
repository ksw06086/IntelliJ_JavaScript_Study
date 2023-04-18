// *** 대화상자 ***
// alert() 알려줌
alert("환영합니다, 님");

// prompt() 입력받음
const name = prompt("이름을 입력하세요.");
const date = prompt("예약일을 입력해주세요.", "2020-10-02");
alert("환영합니다, " + name + "님");
alert(`안녕하세요, ${name}님. 환영합니다.`);

// confirm() 확인받음
const isAdult = confirm("당신은 성인입니까?");
// console.log(isAdult); => boolean 값이 출력됨

