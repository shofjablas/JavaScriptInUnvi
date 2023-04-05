let sum = (a, b) => a + b;
sum(2, 10);
// 1. 변수에 함수 할당

function hello() {
  return "안녕하세요?";
}
function bye() {
  return "안녕히 가세요.";
}
function userCheck(name, fn) {
  console.log(`${name}님`, fn());
}
userCheck("홍길동", hello);  // 홍길동 안녕하세요?
userCheck("도레미", bye);  // 도레미 안녕히 가세요.
//2. 함수를 전달할 수 있다.

let init = () => {
  return function(a, b) {
    return a - b > 0 ? a - b : b - a;
  }
}

console.log(`init()(30, 20) : ${init()(10, 20)}`);
//3. 함수에 다른 함수를 반환할 수 있다.