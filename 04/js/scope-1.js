function sum(a, b) {
  result = a + b;
}
sum(10, 20);
console.log(result);

let hi = "hello";   // 전역 변수

function greeting() {
  console.log(hi);
}

function change() {
  hi = "bye";  // 함수 안에서 전역 변수 수정 가능   
}

greeting();

change();
console.log(hi);