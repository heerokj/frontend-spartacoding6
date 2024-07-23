// 배열

// 1. 생성
// 1-1. 기본 생성
// 배열은 항상 인덱스 가지고있음 
let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 배열의 크기 지정  
let number = new Array(5);

// 2. 요소 접근
console.log(fruits[0]);   // "사과"
console.log(fruits[1]);   // "바나나"
console.log(fruits[2]);   // "오렌지"

// 3. 배열 메소드
// 3-1. push() : 배열의 끝에 요소를 추가
fruits.push("체리");
console.log(fruits);  // [ '사과', '바나나', '오렌지', '체리' ]   

// 3-2. pop() : 배열의 마지막 요소를 삭제
fruits.pop();
console.log(fruits);  // [ '사과', '바나나', '오렌지' ]

// 3-3. shift() : 배열의 첫번쨰 요소를 삭제
fruits.shift();
console.log(fruits);  // [ '바나나', '오렌지' ]

// 3-4. unshift() : 배열 맨 앞에 요소를 추가
fruits.unshift("키위");
console.log(fruits);  // [ '키위', '바나나', '오렌지' ]

// 3-5. splice() 
fruits.splice(1, 1, "포도"); // 인덱스 1부터시작해서 1개지우고 그 자리에 "포도"넣어
console.log(fruits);  // [ '키위', '포도', '오렌지' ]

// 3-6. slice() : 
let slicedFruits = fruits.slice(1, 2); // 1에서 2까지 새로운 요소로 만들어 반환
console.log(slicedFruits);   // ["바나나"]

// 3-7. forEach() : 배열의 모든 요소를 출력
let numbers = [1, 2, 3, 4, 5];

// 매개변수 자리에 함수를 넣어주는것 : 콜백 함수
numbers.forEach(function(){});

numbers.forEach(function(number) {
    console.log(number);
});
// number에 있는 각 요소들이 하나하나 들어가면서 순회함
// return문 없어도 됨


// 3-8. map() 
let numbers2 = [1, 2, 3, 4, 5];

let squaredNumbers = numbers2.map(function(number) {
  return number * number;
});
// 기존에 있었던 배열을 가공해서 새로운 배열을 생성
// return문 있어야 함
// ** 항상 원본 배열의 길이만큼이 return된다.

console.log(squaredNumbers);   // [1, 4, 9, 16, 25]


// 3-9. filter() : 조건에 맞는 것만 반환
let numbers3 = [4, 1, 5, 4, 5];

let evenNumbers = numbers3.filter(function(number) {
    return number % 2 === 0;
});
// return에 조건이 들어감
// number % 2 === 0 인것만 뽑아내라

console.log(evenNumbers);   // [ 4, 4 ]


// 3-11. find() : 조건에 맞는 것 반환(첫번쨰로 들어온 것만)
let numbers4 = [4, 1, 5, 4, 5];

let foundNumber = numbers4.find(function(number) {
    return number > 3;
});
// return에 조건이 들어감
// number > 3 인것만 뽑아내라
// 조건에 맞는 것 중 첫번째로 들어오는 것만 반환

console.log(foundNumber);   // 4


