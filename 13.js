// 조건부 실행
let x = 10;

// if(x > 0){
//     console.log("x는 양수입니다.");
// }

(x > 0) && console.log("x는 양수입니다.");


// or조건(||)
// 삼항 연산자와 단축평가
let y; // y에는 undefined
let z = y || 10; // y가 undefined이면 z에 10을 세팅해줘

console.log(z);   // 10