// 

// ex : 0부터 10까지의 수 중에서 2의 배수만 출력하는 예시
for(let i = 0; i <=10; i++){
    if(i % 2 === 0){
        console.log (i);
    }
}

// for ~ in문
// 객체의 속성을 출력하는 문법
let person = { 
    name: "John", 
    age: 30, 
    gender: "male" 
};

//person['key']
for (let key in person) {
    console.log(key + ": " + person[key]);
}