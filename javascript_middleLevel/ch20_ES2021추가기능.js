// ES2021
// 1. String.replaceAll
// 일반 문자
const str1 = "Hello World"
console.log(str1.replace(/l/, "~")) // He~lo World
console.log(str1.replace(/l/g, "~")) // He~~o Wor~d
console.log(str1.replaceAll("l", "~")) // He~~o Wor~d
// 특수 문자
const str2 = "I'm [Mike]. This is Tom's [Car]"
console.log(str2.replace(/\[/g, "~").replace(/\]/g, "~")) // I'm ~Mike~. This is Tom's ~Car~
console.log(str2.replaceAll("[", "~").replaceAll("]", "~")) // I'm ~Mike~. This is Tom's ~Car~

// 2. Promise.any
const rejPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej("fall...")
    }, 1000)
})
const resPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("fall...")
    }, 2000)
})

Promise.race([resPromise, rejPromise])  // fall... : 가장 빨리 실행되는거 출력
    .then(() => console.log("성공"))
    .catch(e => console.log(e))
Promise.any([resPromise, rejPromise]) // 성공 : 순서대로 어느 하나 성공이 있으면 그거 출력, 모두 fall..이면 에러 출력
    .then(() => console.log("성공"))
    .catch(e => console.log(e))


// 3. 논리연산자
// *** || : 앞의 값이 falsy면 뒤에 값
// *** ?? : 앞의 값이 null이나 undefined면 뒤에 값
// *** && : 앞의 값이 0, null, undifined가 아니면 뒤에거 출력

// function add(num1, num2){
//     console.log(num1 + num2)
// }
// add(); // NaN
function add(num1, num2) {
    num1 ||= 0
    num2 ||= 0
    console.log(num1 + num2)
}
add() // 0
let name = null;
// name &&= `Hello`;
// console.log(name) // null
// name ??= "Mike"
// console.log(name) // Mike

// 4. 숫자 구분자 : 가독성을 좋게 _로 띄워도 숫자를 사용 가능
let billion = 1000000000 // 10억
console.log(billion) // 1000000000
billion = 1_000_000_000 // 10억
console.log(billion) // 1000000000

// 5. WeakRef = weak reference : 약한 참조 => 값을 바꾸어도 일정시간동안은 값이 있는 상태를 참조하는 것
let user = {name:"Mike", age:20}
const weakUser = new WeakRef(user)
user = null
const timer = setInterval(() => {
    const wUser = weakUser.deref();
    if(wUser){
        console.log(wUser.name) // 16번 출력 후 제거됨
    } else {
        console.log("제거되었습니다.")
        clearInterval(timer)
    }
}, 1000)

/// ex) 값이 사라졌을 경우 일정시간은 값을 가지고 있는 cache 객체 만들기
class MyCache {
    constructor() {
        this.cache = {}
    }

    add(key, obj){
        this.cache[key] = new WeakRef(obj)
    }

    get(key){
        let cacheRef = this.cache[key].deref()
        if(cacheRef){
            return cacheRef
        } else {
            return false
        }
    }
}







