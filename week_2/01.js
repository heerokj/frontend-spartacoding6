// 구조분해할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열이나, 객체의 속성

// (1) 배열의 경우
let [value1, value2] = [1, "new"];
console.log(value1); //1
console.log(value2); //"new"

let arr = ["val1", "val2", "val3", "val4"];
let [a, b, c, d, e = 5] = arr;

console.log(a); //"val1"
console.log(b); //"val2"
console.log(c); //"val3"
console.log(d); //"val4"
console.log(e); // 5

// (2)객체인 경우
let user = {
  name: "abc",
  age: 30,
};

// 왼쪽에 있는 변수가 key랑 매칭
// 오른쪽의 객체의 구조를 분해해서 왼쪽의 변수에 각각 할당
// => name과 age는 더이상 객체형태가 아닌 일반 String 과 number
let { name, age } = {
  name: "abc",
  age: 30,
};
console.log(name); //"abc" - String
console.log(age); // 30 - number

// 새로운 이름으로 할당
let { name: newName, age: newAge, birthday = "today" } = user;

console.log(newName); //"abc"
console.log(newAge); // 30
console.log(birthday); // "today"
