const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

console.log(myMap.keys()); //[Map Iterator] { 'one', 'two', 'three' }

for (const key of myMap.keys()) {
    console.log(key);
}

for (const value of myMap.values()) {
    console.log(value);
}

for (const entry of myMap.entries()) {
    console.log(`${entry[0]}: ${entry[1]}`);
}


//<Map의 크기 및 존재 여부 확인>
console.log(myMap.size); // 3 출력

console.log(myMap.has('two')); // true 출력