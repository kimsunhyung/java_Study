console.log(typeof('hi')); // string 
 // -> 한줄주석, /* 내용 */ -> 여러줄 주석

//자바 스크립트의 원시형 데이터 타입 5개
console.log(typeof('hi')); // string
console.log(typeof(100)); // number
console.log(typeof(3.1444)); // number
console.log(typeof('100')); // string
var a;
console.log(typeof(a)); // undefined
var b="hi";
console.log(typeof(b)); // string
console.log(typeof(null)); // object
console.log(typeof(true)); // boolean

var 변수1 = 513;
변수1 = '갑자기 변경';
console.log(typeof(변수1));
// 자바에서는 type변경이 진행되지 않지만, 자바스크립트에서는 변경 가능

let num1 = 123;
let num2 = 45;
num2 += 4; //num2 = num2+4;와 같은 말
console.log(num2);

let 변수5 = true;
변수3 =! true;
console.log(변수3);

let 변수3 = 333;
let 변수4 = "333";
console.log(변수3==변수4);
