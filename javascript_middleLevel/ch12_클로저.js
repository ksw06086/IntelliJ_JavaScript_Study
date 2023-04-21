// 클로저(Closure)
// 어휘적 환경(Lexical Encironment)
// lexical 환경 : 변수는 바로 초기화 안되어서 사용 못함, 함수는 바로 초기화 되어서 사용 가능
function makeAdder(x){
    return function(y){
        return x+y
    }
}

const add3 = makeAdder(3);
console.log(add3(2))
// 전역 Lexical 환경 - makeAdder, add3 생성
// makeAdder Lexical 환경 - add3줄이 실행될 때 x값 대입됨
// 익명함수 Lexical 환경 - add3(2)가 실행될 때 y가 들어감
// 이제 역순으로 각 lexical 환경을 참조하며 값을 대입해나가는 것을 Closure라고 함

function makeCounter(){
    let num = 0;

    return function () {
        return num++;
    }
}
let counter = makeCounter()
console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter()) // 2



