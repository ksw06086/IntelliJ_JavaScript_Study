// DOM(Document Object Model) : html문서의 각 요소를 tree형태로 보여줌, js를 이용해서 생성 수정 삭제 가능
// <트리구조>
// document -> Root element:<html> -> Element:<head>, <body>
// Element:<head> -> Element:<title> -> Text:"My Title"
// Element:<body> -> Element:<a>(Attribute:"href"), <h1> -> Text:""

document.documentElement : 현재 html 페이지 전체 내용을 가져옴
document.body : 현재 html 페이지 <body>...</body> 가져옴
document.head : 현재 html 페이지 <head>...</head> 가져옴
document.body.style : body의 스타일리스트를 가져올 수 잇음
document.body.style.opacity = 0 : 안보이게 함(투명하게 함)
document.body.style.opacity = 0.5 : 반투명하게 함

const el = document.getElementById('first')         // id가 'first'인 태그 가져오기
const pList = document.getElementsByTagName('p') // 태그가 p인 것들을 가져옴(HTMLCollection형태임, 배열 X)
// 모든 p태그들의 fontSize를 30px로 만들어주기
for(p of pList){
    p.style.fontSize = '30px'
}
// 모든 p태그들의 투명도를 랜덤으로 줌
for(p of pList){
    p.style.opacity = String(Math.random())
}

// *** document.querySelectorAll() - 여러개 값일 때, document.querySelector() - 하나일 때<id>
document.querySelectorAll('.link')  // className이 link인 태그 다 가져옴(NodeList형태임, 배열 X)
document.querySelector('.link')     // className이 link인 태그 중 가장 첫번째거 가져옴
document.querySelector('#first')     // id가 first인 태그 가져옴

// *** 해당 태그 중 2번째 가져오기
document.querySelector('h3:nth-of-type(2)');
// *** 해당 태그 중 2번째 글씨 빨간색으로 바꿔주기
document.querySelector('h3:nth-of-type(2)').style.color = 'red'
// *** p태그 짝수번째 가져오기
const pTags = document.querySelectorAll('p:nth-of-type(2n)')



