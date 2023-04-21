// *** button click 이벤트 ***
// ex html ) <button id="btn">클릭</button> <button id="btn2">클릭</button>
function sayHello(){
    alert("Hello")
}
const btn = document.getElementById("btn")
btn.onclick = sayHello
const btn2 = document.getElementById("btn2")
// btn2.addEventListener("click", sayHello)
btn2.addEventListener("click", () => {
    alert("Hi");
})
// 문서가 load되면 body태그의 배경색 red로 바꾸어줌
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = "red"
})
// 이미 할당된 핸들러 삭제
document.removeEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = "red"
})

/// *** 자주 쓰는 이벤트 ***
/// *** 1. button
/// "click"     : 클릭
/// "dblclick"  : 더블클릭
/// *** 2. input
/// "keydown"   : 키 누를 때
/// "keyup"     : 키 땔 때
const input = document.getElementById("txt")
input.addEventListener("keyup", event => {
    console.log(event) // key와 관련된 값들이 무엇이 있는지 확인이 가능함, key값은 입력한 글자가 찍힘
})
/// *** 2-1. input text
/// "focus/blur"      : input창 포커스 될 때 / 포커스 잃을 때
/// "focusin/focusout : input창 포커스 될 때 / 포커스 잃을 때
input.addEventListener("focus", () => {
    input.style.backgroundColor = "rgba(255,0,0,0.2)" // 연한 빨강
})
/// *** 3. "mousemove" Event
const box = document.getElementById("box")
box.addEventListener("mousemove", ev => {
    console.log(ev) // 마우스가 박스 내에 움직일 때마다 이벤트가 발생하며 출력함
})
// ex) 해당 박스가 마우스가 움직일 때마다 해당 x,y 좌표에 따라 움직일 수 있게 하기
// circle - style = "position : absolute;" / box - style = "position : relative"
const circle = document.getElementById("circle")
box.addEventListener("mousemove", ev => {
    circle.style.top = `${ev.clientY}px`;
    circle.style.left = `${ev.clientX}px`;
})

// *** 4. window의 "resize" Event
window.addEventListener('resize', () => {
    document.body.innerHTML = `현재 창 크기는 ${window.innerWidth} x ${window.innerHeight}`
})