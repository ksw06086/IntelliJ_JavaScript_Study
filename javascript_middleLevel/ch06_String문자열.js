// 1. ', ", ` 차이
// ' - html 감쌀 때 편함
let html = '<div class = "box_title">제목영역</div>'
// " - '가 포함된 영어들
let desc = "It's 3 o'clock."
// ` - ${}로 변수 및 계산이 필요한 값을 문자열에 넣을 때 사용
// ` - \n없이 여러줄을 구분할 수 있음
let result = `My name is ${2+3}입니다.`
desc = `오늘은 맑고 화창한
날씨가 계속되겠습니다.
내일은 비소식이 있어요`
console.log(desc)

// 2. length : 문자열 길이
desc = '안녕하세요.'
console.log("문자열의 길이 : " + desc.length)

// 3. 특정 위치 접근
// 단, 한 글자만 바꾸는 것 허용 안됨
console.log(desc[2]) // '하'
desc[4] = '용'
console.log(desc) // 안녕하세요.

// 4. toUpperCase() / toLowerCase()
desc.toUpperCase()
desc.toLowerCase()

// 5. str.indexOf(text)
// 0부터 가장 처음 해당 글자가 나온 순서를 반환함, 없으면 -1 반환
desc.indexOf('안') // 0

// 6. str.slice(n,m) - n : 시작점, m: 없음-끝까지, 양수-그 숫자 전까지, 음수-끝에서부터
desc = "abcdefg"
desc.slice(2) // "cdefg"
desc.slice(0,5) // "abcde"
desc.slice(2,-2) // "cde"

// 7. str.substring(n,m) - n과 m사이의 문자열 반환, 음수 허용 안함
desc.substring(2, 5) // "cde"
// 8. str.substr(n,m) - n은 시작점, m은 갯수
// 9. str.trim() : 앞 뒤 공백 제거
// 10. str.repeat(n) : 문자열을 n번 반복함
let hello = "hello"
hello.repeat(3) // hellohellohello


// ex) 금칙어 : 콜라
// - indexOf() 활용
function hasCola(str) {
    if(str.indexOf("콜라") > -1){
        console.log("금칙어가 있습니다.")
    } else {
        console.log("통과")
    }
}
hasCola("사이다 맛있다.")
hasCola("콜라 맛있다.")
hasCola("맛있는 콜라.")

// includes 활용 : 포함되면 true를 반환
function hasCola2(str) {
    if(str.includes("콜라")){
        console.log("금칙어가 있습니다.")
    } else {
        console.log("통과")
    }
}
hasCola2("맛있는 콜라.")