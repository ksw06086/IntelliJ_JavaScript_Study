// var와 let의 차이점
// var : var name 을 여러번 선언해도 에러가 생기지 않음, 선언과 할당이 함께함
// let : let name이라고 2번 이상 선언하면 에러가 생김
// 1) var는 사용한 후에 선언해도 에러가 생기지 않음 let은 생김
// 2) 호이스팅(선언은 100줄에서 되었지만 이미 선언된걸로 올라감)은 var, let, const 모두 해줌
// 3) Temporal Dead Zone 때문에 var처럼 되지 않음, let과 const는 잠재적 오류를 예측하게 해주게 함

// var : 함수 스코프 -> 함수 내에서만 함수 내 지역변수가 됨 그 외는 다른 곳에서 사용가능
// let : 블록 스코프 ( 함수, if, for, while, try/catch 문)

