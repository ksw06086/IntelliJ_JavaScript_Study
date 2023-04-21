// *** call, apply, bind ***

// 1. call
// : 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있음
// : 자기를 갱신할 수도, 해당함수 this값을 자기것으로 대체할 수도 있음
const mike = {
    name : 'Mike',
}
function showThisName(){
    console.log(this.name)
}
showThisName() // undefined -> this가 window를 가리키는데 window.name는 값이 없음
showThisName.call(mike) // Mike

function update(birthYear, occupation){
    this.birthYear = birthYear
    this.occupation = occupation
}
update.call(mike, 2002, "singer")
console.log(mike) // { name: 'Mike', birthYear: 2002, occupation: 'singer' }

// 2. apply(해당 변수, 넣을 값 배열)
// : call은 일반적인 함수와 마찬가지로 매개변수로 직접 받지만
// : apply는 매개변수를 배열로 받음, 배열요소를 함수 매개변수로 사용할 때 유용함
update.apply(mike, [2002, "singer"])
console.log(mike) // { name: 'Mike', birthYear: 2002, occupation: 'singer' }
// ex)
const nums = [3,10,1,6,4]
// const minNum = Math.min(nums) // [3,10,1,6,4]로 넣으면 안되고 풀어서 넣어야함
// const maxNum = Math.max(...nums)
const minNum = Math.min.apply(null, nums) // 1
const maxNum = Math.max.call(null, ...nums) // 10
console.log(minNum)
console.log(maxNum)

// 3. bind : this값을 영구히 바꿈
// 인수를 업데이트 함
function update2(birthYear, occupation){
    this.name = "jone"
    this.birthYear = birthYear
    this.occupation = occupation
}
const updateMike = update2.bind(mike);
console.log(mike) // { name: 'Mike', birthYear: 2002, occupation: 'singer' }
updateMike(1980, 'police') // 함수의 this를 자기의 것으로 만듦
console.log(mike) // { name: 'jone', birthYear: 1980, occupation: 'police' }

// 객체 함수를 업데이트 함
user = {
    name: "mike",
    showName: function(){
        console.log(`hello, ${this.name}`)
    }
}
user.showName() // hello, mike

let fn = user.showName
fn.call(user);
fn.apply(user);
// let applyFn = fn.apply(user) : 에러 따로 대입해줄 수 없음
fn.bind(user);
fn() // hello, undifined : call, apply, bind 후에 출력해도 안에 값은 변하지 않음
let boundFn = fn.bind(user)
boundFn() // hello, mike
