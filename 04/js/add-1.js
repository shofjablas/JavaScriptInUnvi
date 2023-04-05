let num = parseInt(prompt("몇까지 더할까요?"));
calcSum(num);

function calcSum(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
}