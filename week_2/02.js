// ====== 단축 속성명 : property shorthand ======
const name = "apple";
const newAge = 30;

// key - value
const obj1 ={    // value에 변수로도 쓸 수 있음
    name,       // key와 변수가 이름이 같을때 => 변수 생략 가능
    age: newAge 
}

const Name = "apple";
const Age = 30;

const obj2 ={    // 얼핏보면 배열같지만 실제로는 객체임
    Name,      
    Age,
} 


// ====== 전개 구문 = spread operator ======
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
let arr = [1, 2, 3];
console.log(arr);    // [ 1, 2, 3 ]
console.log(...arr); // 1 2 3

let newArr = [...arr, 4];
console.log(newArr); // [ 1, 2, 3, 4 ]

// 객체
let user1 = {
    name: "aaa",
    age: 30
}
let user2 = {...user1}
console.log(user1);  // { name: 'aaa', age: 30 }
console.log(user2);  // { name: 'aaa', age: 30 }



// ====== 나머지 매개변수 (rest parameter) ======
function exampleFunc(a, b, c, ...args){
    console.log(a, b, c); // 1 2 3
    console.log(...args); // 4 5 => ...를 명시해줘야만 나머지 매개변수라는걸 인식함
    console.log(args);    // [ 4, 5 ]
}
exampleFunc(1, 2, 3, 4, 5);



// ====== 템플릿 리터럴 (Template Literal) ======
// `` 안에는 자바스크립트 코드, 연산 등도 들어갈 수 있다.
// 멀티라인 지원
const testValue = "안녕하세요!";
console.log(`Hello World ${testValue}`); // "Hello World 안녕하세요!""
console.log(`Hello World ${3+3}`);       // "Hello World 6"
console.log(`
        Hello
            My name is Javascript!

            Nice too meet you!
    `); 
