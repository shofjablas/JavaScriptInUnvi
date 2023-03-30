// let userInput = prompt("이름을 입력하세요.");
// if (userInput === null) {
//   alert("취소했습니다.");
// } else {
//   alert(userInput);
// }

// let userInput = prompt("이름을 입력하세요.");
// if (userInput !== null) {
//   alert(userInput);
// }

let score = prompt("프로그래밍 점수: ");
if (score != null) {
  if (parseInt(score) >= 90) {
    alert("A학점");
  } else if (parseInt(score) >= 80) {
    alert("B학점");
  }
}
