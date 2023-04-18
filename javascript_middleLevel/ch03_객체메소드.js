let a = 'age';
const user = {
    name : 'Mike',
    [a] : 30, // [a]로 바꾸면 a 값이 저기에 들어가게 됨
}

// ** Object Method **
// 1) Object.assign() : 객체 복제
const cloneUserEx = user
// ㄴ 객체가 새로 생성되는게 아니라 주소가 같아져서 값을 바꾸면 user객체의 값도 바뀌어짐
// {}는 초기값임, 2번째 인수가 병합됨, 2개 이상의 객체를 병합할 수 있음
const cloneUser = Object.assign({}, user);
// const cloneUser = Object.assign({gender : 'male'}, user);
// ㄴ 병합하게 되어서 추가하게 됨
// const cloneUser = Object.assign({name : 'Tom'}, user);
// ㄴ 키가 같아서 2번째 인수로 덮어쓰여지게 됨

// 2) Object.keys() : 키들을 배열로 반환함
Object.keys(user);
// 3) Object.values() : 값들을 배열로 반환함
Object.values(user);

// 4) Object.entries() : 키와 값들을 배열로 반환함
Object.entries(user);
// [
//    ["name", "Mike"],
//    ["age", 30],
//    ["gender", "male"],
// ]

// 4) Object.fromEntries() : 키와 값들을 배열로 주면 객체 반환함
const arr =
    [
        ["name", "Mike"],
        ["age", 20],
        ["gender", "male"],
    ]
Object.fromEntries(arr);

console.log(arr)


