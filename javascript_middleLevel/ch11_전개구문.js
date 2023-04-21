// 전개구문 : 배열
let arr1 = [1,2,3]
let arr2 = [4,5,6]

let result = [0, ...arr1, ...arr2, 7, 8, 9]
console.log(result)
//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// 전개구문 : 객체
let user = {name: 'Mike'}
let mike = {...user, age:30}
console.log(mike) // { name: 'Mike', age: 30 }

// 전개구문 : 복제
let arr = [1,2,3]
arr2 = [...arr] // [1,2,3]
let user2 = {...user}
user2.name = "Tom"
console.log(user.name) // "Mike"
console.log(user2.name) // "Tom"

// ex) 하나의 객체로 합치기
let userN = {name : "mike"}
let info = {age : 30}
let fe = ["JS", "React"]
let lang = ["Korean", "English"]

let userMike = {
    ...userN,
    ...info,
    skills : [...fe, ...lang]
}
console.log(userMike)
