// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다.

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};
// value에 올 수 있는 데이터 타입은 제한이 없다.

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 25, "여자");

// 2. 접근하는 방법
// .을 통해서 객체의 속성에 접근할 수 있다.
console.log(person.name);
console.log(person.age);
console.log(person.gender);

console.log("1", person.name);
console.log("2", person.age);
console.log("3", person.gender);

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.keys() 메소드 : key를 가져오는 메소드
let person3 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};
let keys = Object.keys(person3);
console.log(keys);   // ["name", "age", "gender"]

// 3-2. Object.values() 메소드 : value를 가져오는 메소드

let values = Object.values(person3);
  console.log(values);   // ["홍길동", 30, "남자"]

// 3-3. Object.entries() 메소드
// key와 value를 묶어서 배열로 만든 배열 (2차원 배열)
let entries = Object.entries(person3);
console.log(entries);


// 3-4. Object.assign() 메소드 : 객체 복사
let newPerson = {};
Object.assign(newPerson, person);
console.log(newPerson);   // { name: "홍길동", age: 30, gender: "남자" }

Object.assign(newPerson, person, {age : 35});
console.log(newPerson);  // { name: "홍길동", age: 35, gender: "남자" }


// 3-5. 객체 비교
// 크기가 상당히 큼 => 메모리에 저장할 때 별도의 공간에 저장
// person4 이 가지고있는 값은 별도 공간에 대한 주소를 저장
let person4 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};

// person5 이 가지고있는 값은 별도 공간에 대한 주소
let person5 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};

let str1 = "aaa";
let str2 = "aaa";
console.log(person1 === person2);   // false ** (주소는 다르다)
console.log(str1 === str2);  // true

// JSON.stringify() : 객체를 문자열로 변환한 후, 문자열 비교
console.log(JSON.stringify(person1) === JSON.stringify(person2));   // true

// 3-6. 객체 병합
let person6 = {
    name: "홍길동",
    age: 30
};

let person7 = {
    gender: "남자"
};

// ... : spread operator
let mergedPerson = {...person1, ...person2};
console.log(mergedPerson);   // { name: "홍길동", age: 30, gender: "남자" }


