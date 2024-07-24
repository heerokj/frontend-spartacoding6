// 일급 객체로서의 함수(3)
// 5. 배열의 요소로 함수를 할당(1)

const myArray = [
    function(a, b) {
        return a + b;
    }, // 0번째 요소
    function(a, b) {
        return a - b;
    }  // 1번째 요소
];

  console.log(myArray[0](5, 10)); // 15 출력
  console.log(myArray[1](10, 5)); // 5 출력
