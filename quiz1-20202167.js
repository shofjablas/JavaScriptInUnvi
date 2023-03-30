let n = document.querySelector("#first_number");
let m = document.querySelector("#second_number");
let outputBttn = document.querySelector("button");
let result = document.querySelector("#result");

outputBttn.onclick = function () {
  result.innerText = getGCD(n.value, m.value);
};

// 최대공약수 : Greatest Common Divisor (GCD)

function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i; // 최대공약수
    }
  }
  return GCD;
}
