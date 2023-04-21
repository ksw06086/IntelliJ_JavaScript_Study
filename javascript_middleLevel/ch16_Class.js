const User = function(name, age){
    this.name = name;
    this.age = age;
    this.showName = function() {
        console.log(this.name)
    }
}

const mike = new User("Mike", 30)

class User2 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    showName(){
        console.log(this.name)
    }
}
const tom = new User2('Tom', 19)
console.log(mike) // 객체내부에 메소드가 있음
console.log(tom) // 멤버변수들만 출력함
// 클래스가 추가된 이유 : new가 없으면 에러를 산출해냄 class는 new 없이 안된다고

// *** 클래스 상속 : extends
class Car {
    constructor(color) {
        this.color = color
        this.wheels = 4
    }
    drive() {
        console.log("drive..")
    }
    stop(){
        console.log("STOP!!")
    }
}

class Bmw extends Car {
    constructor() { // 부모의 생성자가 기본이 아니면 무조건 super 넣어주어야함
        super('black');
        this.navigation = 1
    }
    park() {
        console.log("Park")
    }
}

const z4 = new Bmw()
console.log(z4)


