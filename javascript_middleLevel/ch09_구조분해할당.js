// 구조 분해 할당
// 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

// 1. 배열 구조 분해
let [x, y] = [1, 2]
console.log(x + " " + y)
let users = ['mike', 'lee', 'park']
let [user1, user2, user3] = users
console.log(`user1 = ${user1}`) // 'mike'
console.log(`user2 = ${user2}`) // 'lee'
console.log(`user3 = ${user3}`) // 'park'

// 기본값 설정
// let [a,b,c] = [1, 2] // error
let [a=2,b=3,c=4] = [1, 2]
console.log(a,b,c) // 1 2 4

// 일부 반환값 무시
let [user5, ,user6] = ['mike', 'tom', 'jane', 'tony']
console.log(user5, user6) // mike jane

// 바꿔치기
a = 1; b = 2;
// let c = a; a = b; b = c; X
[a, b] = [b, a]
console.log(a, b) // 2 1

// 2. 객체 구조 분해
user = {name : 'Mike', age : '30'}
let {name, age} = user; // 순서를 신경 안써도 됨, 이름은 똑같이 해아함
let {name: userName, age: userAge} = user // 이름 바꾸고 싶으면 이렇게
console.log(name, age) // mike 30
console.log(userName, userAge) // mike 30
// 기본값 할당
user = {name : 'Mike', age : '30', gender: 'female'}
let {name: userN, age: userA, gender = 'male'} = user;
console.log(gender) // female

