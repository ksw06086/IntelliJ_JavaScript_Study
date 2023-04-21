// 배열 메소드
// 1. arr.splice(n<시작>, m<개수>) : 특정 요소 지움
let arr = [1,2,3,4,5]
arr.splice(1,2)
console.log(arr) // [1,4,5]

// 1-2. arr.splice(n<시작>, m<개수>, x<추가값>) : 특정요소 지우고 추가
arr.splice(1,3,100, 200)
console.log(arr) // [1,100,200]
arr.splice(1,0,"나는", "바비")
console.log(arr) // [ 1, '나는', '바비', 100, 200 ]

// 1-3. arr.splice() : 삭제된 요소 반환
let result = arr.splice(1,2)
console.log(result) // [ '나는', '바비' ]

// 2. arr.slice(n, m) : n부터 m전까지 반환
console.log(arr.slice(1,3)) // [ 100, 200 ]

// 3. arr.concat(arr2, arr3, ...) : 합쳐서 새 배열 반환
arr = [1,2]
let arr2 = arr.concat([3,4])
console.log(arr2)

// 4. arr.forEach(fn) : 배열 반복
let users = ['Mike', 'Tom', 'Jane']
// users.forEach((item<요소>, index<위치>, arr<나눌배열>) => {
//
// })
users.forEach((name, index)=>{
    //console.log(name, index)
    console.log(`${name},  ${index}`)
})

// 5. arr.indexOf(찾을 값, 탐색시작위치) : 해당 값이 있는 위치 찾음
let arr3 = [1,2,3,4,5,1,2,3]
arr3.indexOf(3) // 2
arr3.indexOf(3,3) // 7
arr3.lastIndexOf(3) // 7 : 끝에서부터 탐색

// 6. arr.includes() 포함하는지 확인
arr3.includes(2) // true

// 7. arr.find(fn) / arr.findIndex(fn) : 1개만 찾음
// - 첫번째 true 값만 반환하고 끝. 없으면 undefined를 반환
let result2 = arr3.find((item) => {
    return item % 2 === 0;
})
console.log(result2) // 2
const result3 = arr3.findIndex((item) => {
    return item > 3;
})
console.log(result3) // 3(인덱스번호)

// 8. arr.filter(fn) : 조건에 맞는 값을 여러개 찾아 배열로 반환
result2 = arr3.filter((item) => {
    return item % 2 === 0;
})
console.log(result2) // 2

// 9. arr.reverse() : 역순으로 재정렬
arr = [1,2,3,4,5]
arr.reverse() // 5,4,3,2,1

// 10. arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열 반환
let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});
console.log(newUserList);

// 11. arr.join() : 여러배열을 하나의 문자열로 조합
arr = ["안녕", "나는", "철수야"]
result = arr.join(' ')
console.log(result)

// 12. str.split(구분자) : string문자열을 해당 구분자에 따라 배열로 나누어 반환해줌
const user = "Mike,Jone,Tom,Tony"
result = user.split(",")
console.log(result)

// 13. Array.isArray(arr) : 배열인지 아닌지 확인
let userObj = {
    name: "mike",
    age: 123
}
console.log(typeof userObj) // Object
console.log(typeof result) // Object

console.log(Array.isArray(userObj)) // false
console.log(Array.isArray(result)) // true

