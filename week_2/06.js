// 배열의 요소로 함수를 할당(2)

function multiplyBy(num) {
    return function(x) {
      return x * num;
    }
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);

const result = add(multiplyByTwo(5), multiplyByThree(10)); // 40 출력