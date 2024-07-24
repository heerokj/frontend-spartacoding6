
// 일급 객체로서의 함수(1)

// 1. 변수에 함수를 할당
// 함수는 값으로 취급 
// 변수에 할당된 함수는 나중에 사용할 수 있음
const sayHello = function() {
    console.log('Hello!');
};

  sayHello(); // "Hello!" 출력


// 2. 함수를 인자로 다른 함수에 전달
// 함수는 값으로 취급 
// 다른 함수의 인사로 전달할 수 있음 => 콜백 이나 고차함수를 작성하는데 사용
// ** 콜백함수 : 어떤함수의 매개변수로 쓰이는 함수
// 고차함수 : 함수를 인자로 받거나 함수를 출력으로 반환하는 함수
function callFunction(func) {
    func();
  }
  
  const sayHello1 = function() {
    console.log('Hello!');
  };
  
  callFunction(sayHello1); // "Hello!" 출력



// 3. 함수를 반환
// 함수는 값으로 취급 
// 함수는 다른 함수에서 반환될 수 있음
// 함수 팩토리(factory)나 클로저(closure)를 작성하는 데 사용
function createAdder(num) {
    return function(x) {
      return x + num;
    }
  }
  
  const addFive = createAdder(5);
  console.log(addFive(10)); // 15 출력