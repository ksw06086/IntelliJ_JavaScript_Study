// property key => 1. 문자형
const obj = {
    1: '1입니다.',
    false: '거짓'
}

console.log(Object.keys(obj)) // [ '1', 'false' ] 문자열임
console.log(obj['1'])
console.log(obj['false'])

// property key => 2. Symbol('설명') 설명 붙여주면 코딩할 때 편함
const a = Symbol() // new를 붙이지 않음
const b = Symbol()
console.log(a)
console.log(b)
console.log(a === b) // 생긴건 똑같은데 서로 다름을 표시함
// Symbol : 유일성 보장
const id = Symbol('id')
// Symbol 객체에 사용
// 상대가 만들어 놓은 속성의 값을 변경하지 않기 위해 Symbol 속성을 따로 만들어서 사용하는 것임
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}
console.log(user) // { name: 'Mike', age: 30, [Symbol(id)]: 'myid' }
console.log(user[id]) // myid
console.log(Object.keys(user)) // [ 'name', 'age' ]
console.log(Object.values(user)) // [ 'Mike', 30 ]
console.log(Object.entries(user)) // [ [ 'name', 'Mike' ], [ 'age', 30 ] ]

// Symbol.for() : 전역 심볼
// - 하나의 심볼만 보장받을 수 있음
// - Symbol은 매번 다른 Symbol값을 생성하지만
// - Symbol.for은 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유함
const id1 = Symbol.for('id')
const id2 = Symbol.for('id')
console.log(id1 === id2) // true

// 일반심볼의 키값 가져오기 : 변수명.description
// 전역심볼의 키값 가져오기 : Symbol.keyFor(변수명)

// 숨겨진 Symbol key를 Object 메소드로 보는 방법
console.log(Object.getOwnPropertySymbols(user)) // [ Symbol(id) ]
console.log(Reflect.ownKeys(user)) // [ 'name', 'age', Symbol(id) ]


// 직업 선호도 검사, 직업 가치관 검사
