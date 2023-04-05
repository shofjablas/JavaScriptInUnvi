let sum = function(a, b) {
  return a + b;
}
console.log(`함수 실행 결과 : ${sum(10, 20)}`);
// 익명함수

(function(a, b) {
  let sum = a + b;
  console.log(`함수 실행 결과 : ${sum}`);
})(100,200);
// 즉시실행함수