// * 나머지 매개변수 : ...
// 인수전달
function showName(name){
    console.log(name)
}
showName('Mike') // 'Mike'
showName('Mike', 'Tom') // 'Mike'
showName() // undefined

// arguments 중요!
// ** 함수로 넘어 온 모든 인수에 접근
// ** 함수내에서 이용 가능한 지역변수
// ** length / index
// ** Array 형태의 객체
// 배열의 내장 메서드 없음(forEach, map)
function showName1(name){
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
}
showName1('Mike', 'Tom') // 2 \n 'Mike' \n 'Tom'

// 나머지 매개변수
// 배열로 값을 전달함, 배열의 메소드 사용 가능
function showName2(...names){
    console.log(names)
}
showName2() // []
showName2('Mike') // ['Mike']
showName2('Mike', 'Tom') // [ 'Mike', 'Tom' ]

// ex) user객체를 만들어주는 생성자 함수 만듦
// 나머지 매개변수는 항상 마지막에 존재해야함
function User(name, age, ...Skills){
    this.name = name
    this.age = age
    this.skills = Skills
}
const user1 = new User('Mike', 30, 'html', 'css')
const user2 = new User('Tom', 20, 'React')
const user3 = new User('Park', 10, 'English')
console.log(user1) // User { name: 'Mike', age: 30, skills: [ 'html', 'css' ] }
console.log(user2) // User { name: 'Tom', age: 20, skills: [ 'React' ] }
console.log(user3) // User { name: 'Park', age: 10, skills: [ 'English' ] }




