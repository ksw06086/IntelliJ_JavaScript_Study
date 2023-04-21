// ex html)
// <h1>Welcome</h1>
// <h2>World</h2>
// <ul id = "color">
//     <li id = "red">Red</li>
//     <li id = "blue">Blue</li>
//     <li id = "green">Green</li>
// </ul>
// <h3>A</h3>
const blueTextNode = blue.firstChild // "Blue"
blueTextNode.nodeName // '#text'
blueTextNode.nodeType // 3(요소)
blueTextNode.nodeValue // 'Blue'
blueTextNode.nodeValue = '파랑' // 'Blue' => '파랑'

const ul = document.getElementById('color')
ul.nodeType  // 1(Element)
ul.nodeName  // UL
ul.nodeValue // null : 이건 text에서만 확인/변경 가능
// *** 생성 : html 초기화
ul.innerHTML = '<li>RED</li>'
// *** 추가 : 새로운 html 태그 만들기
ul.append('<ui></ui>') // 형제노드 추가하기
// ex1)
ul.appendChild('<li>BLUE</li>')
// ex2)
const newLi = document.createElement('li') // <li></li> 생성
newLi.innerHTML = 'green'
ul.appendChild(newLi)
// ex3)
const newLi2 = document.createElement('li')
const newText = document.createTextNode('pink')
newLi2.appendChild(newText)
ul.appendChild(newLi2)

const newLi3 = document.createElement('li')
const textNode3 = document.createTextNode('black')
newLi3.appendChild(textNode3)
const red = document.getElementById('red')
ul.insertBefore(newLi3, red) // 'red'가 id인 태그 앞에 newLi3 추가
ul.appendChild(red) // 기존의 것을 추가하면 새로 추가가 아닌 맨 뒤로 이동이 됨

// *** 복제
const newBlack = newLi3.cloneNode(); // 얕은 복제 : 하위 요소는 복제되지 않음
ul.appendChild(newBlack) // 추가가 됨 li태그만
const newBlack2 = newLi3.cloneNode(true); // 깊은 복제 : 하위 요소까지 복제됨
ul.appendChild(newBlack2) // 추가가 됨 li태그와 'black'까지

// *** 삭제
ul.removeChild(red) // red 노드 삭제
ul.removeChild(ul.firstElementChild) // 첫번째 자식노드 삭제
