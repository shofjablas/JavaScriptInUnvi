//섭씨 온도 = (화씨 온도 - 32) / 1.8
//섭씨: celsius, 화씨 : fahrenheit

let fah = parseFloat(prompt("변화할 화씨 온도"));
let cel;

cel = ((fah - 32) / 1.8).toFixed(3);
alert(`화씨 ${fah}도는 섭씨 ${cel}도 입니다.`);
