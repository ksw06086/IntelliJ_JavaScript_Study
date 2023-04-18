// *** 객체(Object) ***
// 1. 객체생성
const superman = {
    name : 'clark',
    age : 33,
}
// 2-1. 객체 요소 접근
superman.name;
superman['age'];
// 2-2. 추가
superman.name = 'male';
// 2-3. 삭제
delete superman.age;

// 3. Object-단축 프로퍼티
const name1 = 'clark';
const age1 = 33;

const superman1 = {
    name1,  // name1=name1
    age1,   // age1=age1
    gender:'male',
}

// 4. Object-프로퍼티 존재 여부 확인
// 함수 인자를 받아올 때 데이터가 있는지 확인할 때 사용함
superman.birthDay;  // undefined
'birthDay' in superman;  // false
'age' in superman;  // true

// 5. for...in 반복문
for(let key in superman){
    console.log(key)
    console.log(superman[key])
}

// 6. 함수로 객체 인자 받기
function makeObject(name, age){
    return {
        name,
        age,
        hobby : 'football',
    }
}

const Mike = makeObject('Mike', 30);
console.log(Mike);
console.log('age' in Mike);
console.log('birth' in Mike);

function isAdult(user) {
    if(!('age' in user) || user.age < 20){
        return false;
    }
    return true;
}

const Mike2 = {
    name: "Mike",
    age: 30,
    fly() {
        console.log("날라갑니다.");
    }
};

const Jane = {
    name: "Jane"
};

console.log(isAdult(Jane))
Mike2.fly()

// 객체 안에서 자신의 멤버변수를 사용하고 싶을 때 this로 호출한다.
const user1 = {
    name : 'Mike',
    sayHello(){
        console.log(`Hello, I'm ${this.name}`);
    }
}

user1.sayHello();

// 화살표 함수와 일반 함수의 차이점
// 화살표 함수 : 자신만의 this를 가지지 않음 사용못함 그래서 외부에서 가져와야함
// 일반 함수 : 자신만의 this를 가지고 있어서 사용할 수 있음
