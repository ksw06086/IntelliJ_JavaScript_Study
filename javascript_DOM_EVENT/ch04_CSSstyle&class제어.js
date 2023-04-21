// CSS style 변경
const box = document.getElementById("box")
box.style.backgroundColor = "#ccc"
box.style["margin-left"] = "30px"
box.style.border = "10px solid #000"

// Class 다루기
box.className = "bg-red txt-pink" // 클래스 이름 초기화
box.classList // className을 List로 가져옴, 마지막은 합친 value : String 값이 있음
box.classList.add("txt-white", "bg-yellow") // 클래스 이름 추가
box.classList.remove("txt-white") // 클래스 이름 삭제
box.classList.replace("bg-red", "bg-blue") // 클래스 이름 bg-red를 bg-blue로 바꾸기

// 특정 클래스를 넣었다 빼었다 하기
// ex) 1초마다 빨강 넣었다 빼기
setInterval(() => {
    box.classList.toggle('bg-red')
}, 1000)

// ex) li태그 클릭할 때마다 글자 핑크색 넣었다 빼기
const color = document.getElementById('color') // ul태그 가져옴
color.onclick = function(e){
    const target = e.target; // 클릭한 li요소 가져오기
    if(target.tagName !== "LI") return;
    target.classList.toggle("txt-pink")
}