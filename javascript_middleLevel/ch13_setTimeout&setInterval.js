// *** setTimeout   : 일정 시간이 지난 후 함수를 실행
// *** setInterval  : 일정 시간 간격으로 함수를 반복

// 1. setTimeout(fn, 시간, 인수);
function fn(name){
    console.log(name)
}
function showName(name){
    console.log(name)
}
const tId = setTimeout(showName, 3000, 'Hike') // 3초뒤에 함수 실행
clearTimeout(tId) // 세팅된 Timeout 함수 실행 초기화

// 2. setInterval(fn, 시간, 인수);
const inId = setInterval(fn, 3000, 'Mike')
clearInterval(inId) // 세팅된 Interval 함수 실행 초기화

// 주의사항! delay = 0일 때
// 모든 스크립트 진행 후에 setTimeout 함수가 실행이됨
setTimeout(function(){
    console.log(2)
}, 0)
console.log(1)

// ex) 초마다 출력되게 함
let num = 1
function showTime() {
    console.log(`실행된지 ${num++}초 지났습니다.`)
    if(num > 5) {
        clearInterval(iId)
    }
}
const iId = setInterval(showTime, 1000)
