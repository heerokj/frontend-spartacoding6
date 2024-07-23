// 연산자


// 3. 비교 연산자(--> true 또는 false를 반환하는 연산자)
// 3-1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환하는 연산자
console.log(2 === 2);   // true
console.log("2" === 2);   // false
console.log(2 === "2");   // false

// 3-2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환하는 연산자
console.log(2 !== 2);   // false
console.log("2" !== 2);   // true
console.log(2 !== "2");   // true 

// 3-3. 작다 연산자(<), 작거나 같다 연산자(<=)
console.log(2 <= 3);   // true
console.log(2 <= "3");   // true
console.log("2" <= 3);   // true
console.log(2 <= 2);   // true
console.log(3 <= 2);   // false

// 4. 논리연산자
// 4-1. 논리곱 연산자 :두 값이 모두 true일 경우에만 true를 반환
console.log(true && true);   // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);   // false

// 4-2. 논리합 연산자 : 두 값 중 하나라도 true일 경우 true를 반환
console.log(true || true);   // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);   // false

// 4-3. 논리부정 연산자 : 값을 반대로 바꿈
console.log(!true);   // false
console.log(!false);   // true
console.log(!(2 > 1));   // false

// 5. 삼항연산자(중요!)
let x = 10;
let result = (x > 5) ? "크다" : "작다";
console.log(result);   // "크다"

let y = 20; 
let result2 = y < 10 ? "작다" : "크다";
console.log(result2);   // "크다"

// 6. 타입연산자(typeof)
console.log(typeof "5"); //"String" 