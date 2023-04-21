const pList1 = document.querySelectorAll('p') // NodeList
const pList2 = document.getElementsByTagName('p') // HTMLCollection
// *** 차이점 ***
// 1. 선언 후 html 수정(p태그 추가)
// NodeList : 자동 반영안됨, 수정전 p태그 개수 가져옴
// HTMLCollection : 자동 반영됨, 수정후 p태그 개수 가져옴

// ex html)
// <ul id = "color">
//     <li id = "red"></li>
//     <li id = "blue"></li>
//     <li id = "green"></li>
// </ul>
// *** 부모노드 ***
const red = document.getElementById('red')
red.parentNode; // ul태그, parentElement도 같음 -> 
// 하지만 document.documentElement.parentElement로 하면 null이 나옴 document는 요소가 아닌 node이기 때문

// *** 자식노드 ***
// NodeList : 모든 요소들, childNodes는 실시간 변동이 가능함
// HTMLCollection : 태그들
const ul = document.getElementById('color')
ul.childNodes   // 자식과 하위 모든 요소들, 태그 이외에 text, 주석도 함께 나옴 / text가 아무것도 없어도 엔터하면 공백이 추가됨
ul.children     //(HTMLCollection) 자식 태그들 -> li만
// ex) 첫번째 자식과 마지막번째 자식 가져오기
ul.firstChild   // 결과는 1번째 가장 아래 요소인 #text 가져옴          이거 안씀
ul.lastChild    // 결과는 마지막 가장 아래 요소인 #text 요소 가져옴     이거 안씀
ul.firstElementChild    // red li태그     많이 씀
ul.lastElementChild     // green li태그   많이 씀

// *** 형제노드 ***
const blue = document.getElementById('blue')
blue.previousSibling;   // 결과는 이전 형제 가장 아래 요소인 #text 가져옴          이거 안씀
blue.nextSibling;       // 결과는 다음 형제 가장 아래 요소인 #text 가져옴          이거 안씀
blue.previousElementSibling // red li태그     많이 씀
blue.nextElementSibling     // green li태그   많이 씀

