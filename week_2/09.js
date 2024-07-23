// Set
// 고유한 값을 저장하는 자료 구조
// 값만 저장
// 키를 저장하지 않음
// 값이 중복되지 않는 유일한 요소로만 구성
// 값 추가 및 검색, 값 삭제, 모든 값 제거, Set 크기 및 존재 여부 확인

// <Set 생성 및 사용>
const mySet = new Set();

mySet.add('value1');
mySet.add('value2');
mySet.add('value2');

//<Set의 반복>
const mySet1 = new Set();
mySet1.add('value1');
mySet1.add('value2');
mySet1.add('value3');

for (const value of mySet1.values()) {
    console.log(value);
}

//<Set의 크기 및 존재 여부 확인>
console.log(mySet.size); // 2 출력
console.log(mySet.has('value1')); // true 출력
