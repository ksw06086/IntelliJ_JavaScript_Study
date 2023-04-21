// 1. arr.sort(fn) : 재정렬, 배열 자체가 변경됨
// 주의 ! 배열 자체가 변경됨, 인수로 정렬 로직을 담은 함수를 받음
let arr = [5,3,1,7,2]
arr.sort() // 1,2,3,5,7
arr = [27, 8, 5, 13]
arr.sort() // 13, 27, 5, 8
function fn(a, b){
    return a - b; // a,b 비교해서 a가 작으면 앞으로, b가 작으면 b를 앞으로
}
console.log(arr.sort(fn)) // [ 5, 8, 13, 27 ]

// 위에처럼 함수 만들기 보다 Lodash 라이브러리를 사용함
// .sortBy(arr); 뭐든 원하는 방식으로 정렬해줌
// https://lodash.com/

// 2. arr.reduce() - 인수로 함수를 받음
// arr.reduceRight() - 기능은 같음 오른쪽부터 계산함
// (누적 계산값, 현재값) => {return 계산값};
// 배열의 모든 수 합치기
arr = [1,2,3,4,5]
// for, for of, forEach
// result = 0
// arr.forEach(num => {
//     result += num
// })
result = arr.reduce((prev, cur) => {
    return prev += cur;
}, 100) // 115
console.log(result)

userList = [
    {name: "mike", age: 30},
    {name: "kim", age: 18},
    {name: "Lee", age: 26},
    {name: "park", age: 25},
    {name: "jung", age: 19},
    {name: "sin", age: 23},
]
result = userList.reduce((prev, cur) => {
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev
}, [])
console.log(result)


