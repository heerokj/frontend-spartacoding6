// 일급 객체로서의 함수(2)

const person1 = {
    name: 'John',
    sayHello: function() {
        console.log("Hello, my name is" +this.name);
    }
};
    person1.sayHello(); // "Hello, my name is John" 출력

const person2 = {
    name: 'John',
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};  
    person2.sayHello(); // "Hello, my name is John" 출력


const person3 = {
    name: 'John',
    sayHello : () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};
    person3.sayHello(); // "Hello, my name is undefined" 출력

    //==> 화살표함수는 this를 바인딩하지 않는다! **
