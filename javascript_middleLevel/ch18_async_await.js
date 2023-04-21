// async 키워드 : 함수 앞에 추가하면 반환을 항상 promise로 해줌
// 한마디로 성공인지 아닌지에 따라 then함수를 사용할 수 있음
async function getNameResolve() {
    return "Mike"
}
getNameResolve().then((name) => {
    console.log(name)
}) // Mike

async function getNameErr() {
    throw new Error("err...")
}
// getNameErr().catch((err) => {
//     console.log(err)
// }) // err... ~~~~~~~

// await - async 함수내에서만 사용 가능
// 형식 : const 변수 = await Promise함수;
function getName(name){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(name)
        }, 1000)
    })
}

async function showName(){
    try{
        const result = await getName("mike")
        // const result = await Promise.all([p1(), p2()]) // 가능, 결과를 배열로 반환
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}

console.log("시작")
showName()

