const bttn = document.querySelector("button");     // 버튼 요소 가져옴

/*function display() {
  alert("클릭했습니다.");
}

bttn.addEventListener("click", display); */

bttn.addEventListener("click", () => {            // 버튼 클릭하면 alert 실행
  alert("클릭했습니다.");
});