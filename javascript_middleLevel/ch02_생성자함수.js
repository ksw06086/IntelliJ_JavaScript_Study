// **** 생성자 함수 ****
// - 객체를 여러개 생성해야할 때 주로 사용함
function User(name, age){
    // // => 이미 미리 생성해줌
    // this = {}
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
    // return this;
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 20);
let user3 = new User('Tom', 17);
user1.sayName();

