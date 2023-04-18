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

// **** Computed property ****
// ex1)
let a = 'age';
const user = {
    name : 'Mike',
    [a] : 30, // [a]로 바꾸면 a 값이 저기에 들어가게 됨
}
// ex2) {5: 5, 안녕하세요: "Hello"}
// const user = {
//   [1+4] : 5,
//   ["안녕" + "하세요"] : "Hello"
// }

