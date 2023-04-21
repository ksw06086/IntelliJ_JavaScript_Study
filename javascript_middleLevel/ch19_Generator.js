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

const a = fn() // 함수가 실행은 되지 않고 함수를 넘겨주게 됨
a.next(); // value : 1
a.next(); // value : 2
a.next(); // value : 3
a.next(); // value : "finish"
// 중간에 a.return("END!!") 호출하면 함수가 끝남