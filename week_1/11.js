// 조건문 - if, else if, else, switch

// 1. if문
// 1-1. 
let x = 10;

if (x > 0) {
    console.log("x는 양수입니다.");
}

//1-2. if-else문 
let y = -10;

if (y > 0) {
    console.log("y는 양수입니다.");
} else {
    console.log("y는 음수입니다.");
}

// 1-3. if-else if-else문
let z = 0;

if (z > 0) {
    console.log("z는 양수입니다.");
} else if (z < 0) {
    console.log("z는 음수입니다.");
} else {
    console.log("z는 0입니다.");
}


// 2. Switch문
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log("사과는 빨간색입니다.");
    break;
    case "바나나":
        console.log("바나나는 노란색입니다.");
    break;
    case "오렌지":
        console.log("오렌지는 주황색입니다.");
    break;
    default:
        console.log("해당하는 과일이 없습니다.");
    break;
}