// 상속, 프로토타입
const car = {
    wheels: 4,
    color: "white",
    drive() {
        console.log("drive..")
    }
}

const bmw = {
    color: "red",
    navigation: 1,
}
const benz = {
    color: "black",
}
const audi = {
    color: "blue",
}
// 상속
bmw.__proto__ = car
benz.__proto__ = car
audi.__proto__ = car
console.log(bmw)
console.log(bmw.wheels)
console.log(bmw.color) // red
console.log(bmw.__proto__.color) // white

// ex) 내가 사용할 수 있는 요소들
for(p in bmw){
    console.log(p)
}
// ex) 내꺼인지 아닌지 확인
for(p in bmw){
    if(bmw.hasOwnProperty(p)){
        console.log("o", p)
    } else {
        console.log("x", p)
    }
}

// 생성자 함수와 prototype
// 생성자 함수에 __proto__로 추가해주는게 아닌 해당 생성자 함수에 상속 값 추가
let Bmw = function (color){
    this.color = color
}
// 상속 ex1)
// Bmw.prototype.wheels = 4
// Bmw.prototype.drive = function(){
//     console.log("drive..")
// }
// 상속 ex2)
Bmw.prototype = {
    constructor: Bmw,
    wheels: 4,
    drive(){
        console.log("drive..")
    }
}
const x = new Bmw("red")
console.log(x.color) // red
console.log(x.wheels) // 4
console.log(x instanceof Bmw) // true
console.log(x.constructor === Bmw) // true

// 현재 Bmw의 color값 접근이 가능한데 가능하지 않게 하기 위한 방법
Bmw = function(color){
    const c = color
    this.getColor = function(){
        return c
    }
}

const x5 = new Bmw('black')
console.log(x5.color) // undifined
console.log(x5.getColor()) // black