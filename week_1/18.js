//while문
let i = 0;

// while(조건){
//     //메인로직
//     //증감.. 등
// }

while(i < 10){ //i가 10보다 작을때까지 돌리기
    console.log(i);
    i++;
}

//3초과, 100미만의 숫자 중 5의 배수인 것만 출력
i = 3;
while(i < 100){
    if(i%5 === 0 && i >= 5 ){ 
        console.log(i);
    }
    i++;
}

console.log("-----------------");

i = 0;
// do ~ while문 
// 일단 한번 코드를 실행한 후 while문 실행
do {
    console.log(i);
    i++;
}while(i < 10);

console.log("-----------------");

// break
for(let i =0; i <= 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

console.log("-----------------");

// continue
for(let i =0; i <= 10; i++){
    if(i === 5){
        continue; 
    }
    console.log(i);
}