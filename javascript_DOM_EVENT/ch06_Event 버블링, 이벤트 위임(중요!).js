/// 이벤트 버블링 : 자식의 이벤트는 부모에게 전파된다.
/// 버블링이 안되는 이벤트 : focus, blur, mouseenter, mouseleave
/// ㄴ 이 이벤트 버블링 있고 싶으면 : focusin, focusout, mouseover, mouseout 으로 대체
/// 버블링 막는 법 : 결과 값 event 변수에 stopPropagation() 실행해주면 됨
// <body>
//     <div id = "box">
//         <ul id = "list">
//             <li id = "color"></li>
//         </ul>
//     </div>
// </body>
const box = document.getElementById("box")
const list = document.getElementById("list")
const color = document.getElementById("color")

document.body.addEventListener('click', () => {
    console.log("1, body")
})
box.addEventListener('click', () => {
    console.log("2, div")
})
list.addEventListener('click', () => {
    console.log("3, ul")
})
color.addEventListener('click', () => {
    console.log("4, li")
})
// ==> 화면에 li를 클릭하면 4개 다 이벤트 실행이 됨
// ==> 화면에 div부분만 클릭하면 body, div Event 실행이 됨

/// *** 이벤트 위임 : 똑같은 이벤트를 자식에게 여러번 지정할 때 자식이 150개일 때 발생되는 코드 길이를 줄이기 위함
// class = "on" : 색깔 빨간색으로 처리
// <body>
//     <div id = "box">
//         <ul id = "list">
//             <li id = "red" class = "on"><a href = "#">Red</a></li>
//             <li id = "blue"><a href = "#">Blue</a></li>
//             <li id = "green"><a href = "#">Green</a></li>
//             <li id = "pink"><a href = "#">Pink</a></li>
//         </ul>
//     </div>
// </body>
const list = document.getElementById("list")
const colors = list.children // list 하위 모든 li태그

function clickHandler(event){
    console.log("target", event.target); // 실제 이벤트를 발생시키는 요소
    console.log("currentTarget", event.currentTarget) // 이벤트 핸들러가 등록된 요소
    let target = event.target;
    if(target.tagName === "A"){ // a태그일 경우 위의 부모 li로 이동
        target = target.parentElement;
    } else if(target.tagName === "UL"){ // ul태그일 경우 아무것도 안함
        return;
    }
    for (c of colors){
        c.classList.remove("on")
    }
    target.classList.add("on") // 클릭된 타겟의 하위 태그
}

// document.getElementById("red").addEventListener("click", clickHandler)
// document.getElementById("blue").addEventListener("click", clickHandler)
// document.getElementById("green").addEventListener("click", clickHandler)
// document.getElementById("pink").addEventListener("click", clickHandler)
document.getElementById("list").addEventListener("click", clickHandler)