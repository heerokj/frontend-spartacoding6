//  falsy한 값과 truthy한 값

if (0) {
    console.log("이 코드는 실행되지 않습니다.");
}

if ("") {
    console.log("이 코드는 실행되지 않습니다.");
}

if (null) {
    console.log("이 코드는 실행되지 않습니다.");
}

if (undefined) {
    console.log("이 코드는 실행되지 않습니다.");
}

if (NaN) {
    console.log("이 코드는 실행되지 않습니다.");
}

if (false) {
    console.log("이 코드는 실행되지 않습니다.");
}

// => 모두 실행 안됨 falsy한 값이다.

if (true) {
    console.log("hello");
}