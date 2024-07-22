//변수, 상수
//주석 : JS엔진이 해석하지 않음 
//메모리에 저장한다. 읽어들여서 재사용한다. 변수.

//[변수의 5가지 주요 개념]
// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용사기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 변수를 선언할 수 있는 3가지 방법 : var, let, const
// 1. var
var myVar = "Hello World" 
var myVar = "Test 1" 
myVar = "Goodbye 1" 
console.log(myVar);

// 2. let
let myLet = "Hello World2" 
//let myLet = "Test 2" //오류
myLet = "Goodbye 2"
console.log(myLet);

// 3. const
const myConst = "Hello World3" 
//const myConst = "Test 3" //오류
//myConst = "Test 3" //오류
console.log(myConst);

