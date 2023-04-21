// *** Promise ***
// 고객이 상점에 상품을 주문할 때 자신의 번호를 알려주고 상점이 준비가 끝나면 그 번호로 알려주는 방식
// 성공과 실패를 내가 결정해서 반환해주어야 함
// const pr = new Promise((resolve<성공>, reject<실패>) => {
//  //code
// }) -- callback 함수
// -- property : state, result
// -- resolve(value) => state: fulfilled, result: value
// -- reject(error) => state: rejected, result: error
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('no...')
    }, 2000)
})
// pr.then(resolveFnName(result){}, rejectedFnName(err){})
// ex1)
// pr.then(
//     function(result){ // 성공시
//         console.log(result + "가지러 가자")
//     },
//     function(err){ // 실패시
//         console.log("실패하였습니다.")
//     })
// ex2) 더 애용함
pr.then( // 성공시
    function(result){ console.log(result + "가지러 가자") }
).catch( // 실패시
    function(err){ console.log("실패하였습니다.") }
).finally(
    function (){ // 항상 출력해줌
        console.log('--- 주문 끝 ---')
    }
)

// ** promise() 안쓴 callback 함수 ** //
const f1 = (callback) => {
    setTimeout(function() {
        console.log("1번 주문 완료")
        callback();
    }, 1000)
}
const f2 = (callback) => {
    setTimeout(function() {
        console.log("2번 주문 완료")
        callback();
    }, 3000)
}
// console.log("시작")
// f1(function(){
//     f2(function (){
//         console.log("끝")
//     })
// })

// ** Promise를 사용한 예제 ** //
const p1 = () => {
    return new Promise((res, rej) => {
        setTimeout(function() {
            console.log("1번 주문 완료")
            res();
        }, 1000)
    })
}
const p2 = (callback) => {
    return new Promise((res, rej) => {
        setTimeout(function() {
            console.log("2번 주문 완료")
            rej();
        }, 3000)
    })
}
console.log("시작")
// console.time('x')
// p1()
//     .then((res) => p2())
//     .catch((err) => {console.log("에러남")})
//     .finally(() => {console.timeEnd('x')}) // x: 4.026s
// 결과 : 결과 다 출력되고 에러남을 보여줌

// *** then((result) => {}).catch((err) => {}).finally(() => {})) ***
// then()의 코드가 정상 작동했으면 그대로 진행
// then() 진행중 에러가 났으면 cathch로 이동
// finally는 항상 끝에 출력함

// *** Promise.all([fn1, ...]).then((res) => {});
// console.time('x')
// Promise.all([p1(), p2()]).then((res) => {
//     console.log(res)
//     console.timeEnd('x') // x: 3.008s
// })
// 두개 모두 다 완료 되어야 끝남
// 결과 : reject가 오면 이전것만 실행되고 그 이후것들은 아예 빨간 Error로 처리됨

// *** Promise.race([fn1, ...]).then((res) => {});
// console.time('x')
// Promise.race([p1(), p2()]).then((res) => {
//     console.log(res)
//     console.timeEnd('x') // x: 3.008s
// })
// 둘중 하나라도 완료되면 끝냄
