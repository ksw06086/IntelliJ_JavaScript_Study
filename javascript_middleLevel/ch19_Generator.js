// Generator : 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// function* fn() {
//   yield 1;
//   yield 2;
//   return "finish"
// }

function* fn(){
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish";
}

let a = fn() // 함수가 실행은 되지 않고 함수를 넘겨주게 됨
a.next(); // value : 1
a.next(); // value : 2
a.next(); // value : 3
a.next(); // value : "finish"
// 중간에 a.return("END!!") 호출하면 함수가 끝남

// Generator
// - iterable
// + Symbol.iterator 메서드가 있다.
// + Symbol.iterator 는 iterator를 반환해야한다.
// - iterator
// + next메서드를 가진다.
// + next메서드는 value와 done속성을 가진 ㄱ개체를 반환한다.
// + 작업이 끝나면 done은 true가 된다.

const arr = [1,2,3,4,5]
const it = arr[Symbol.iterator]();
console.log(it.next()) // { value: 1, done: false }
// 배열, Generator함수, 객체, 문자열 모두 iterator 사용 가능

// *** ex) 외부로부터 값을 입력받을 수도 있다. ***
function* fnInput(){
    const num1 = yield "첫번째 숫자를 입력해주세요.";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입력해주세요.";
    console.log(num2);

    return num1 + num2;
}

a = fnInput()
console.log(a.next())
console.log(a.next(2))
console.log(a.next(4))

// *** ex) Generator 함수안에서 무한루프 활용 ***
function* fnWhile(){
    let index = 0;
    while(true){
        yield index++;
    }
}

a = fnWhile()
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())

// *** Generator 안에 Generator *** : yield* 활용
function* gen1(){
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2(){
    yield "Hello,";
    yield* gen1();
    yield "!";
}

console.log(...gen2()) // Hello, W o r l d ! : done이 true가 될때까지 출력해줌

a = gen2()
console.log(a.next()) // { value: 'Hello,', done: false }
console.log(a.next()) // { value: 'W', done: false }
console.log(a.next()) // { value: 'o', done: false }
