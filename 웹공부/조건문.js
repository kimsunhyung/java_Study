// let num1 =4;
// if(num1 < 0) {

//     console.log('음수 입니다');
// }else if(num1 < 10) {
// console.log('10보다 작은 양수 입니다');
// }else{console.log('10보다 큰 수 입니다');
// }

// // 주어진 수가 짝수인지 홀수 인지 판단해보세요
// let num3 = 56;
// console.log(num3%2);
// if(num3%2 == 0){
//     console.log('짝수 입니다');
// }
// else{
//     console.log('홀수 입니다');
// }

// 입력된 변수가 숫자인지 아닌지
// let hi = 56;
// console.log(hi);
// if(typeof(hi) == number){
//     console.log('숫자입니다');
// }
// else{
//     console.log('숫자가 아닙니다');
// }

// 변수가 3의 배수인지 판별해보세요
// let third = 3;
// if(third%3 ==0){
//     console.log('3의 배수 입니다');
// }
// else{
//     console.log('3의 배수가 아닙니다');
// }


//문자열이 들어있는 변수에 '안녕' 이 들어있으면 '안녕하세요'를 콘솔에 찍으세요
// let str = '안녕하요';
// if(str.includes('안녕')){
//     console.log('안녕하세요');
// }

// // 분을 입력하면 몇시간 몇분인지를 알려주세요

// let hours;
// let minutes;
// let time = 380;
// minutes = time % 60; // 20
// time -= minutes; //time = 360
// hours = time/60;
// console.log(hours+'시간' + minutes +'분');

// 세숫자를 비교하여 가장 큰숫자를 출력해보세요
// let num1 = 20;
// let num2 = -3.145;
// let num3 = 53;
// let max = num1;
// if(num2>max){
//     max = num2;
// }
// if(num3>max){
//     max = num3;
// }
// console.log(max);

//반지름이 r인 원의 넓이를 구해보세요
// let r = 1;
// let 원주율 = 3.141592;
// let 원넓이 = 원주율*r*r;
// console.log(원넓이);


// 숫자가 3의 배수면 3의 배수 5의배수이면 5의 배수라고 출력하되 15의 배수라면 15의 배수라고만 출력해주세요(3,5의 배수인지는 출력 마시오)
// let num5 = 75;
// if(num5 % 15 ==0){
//     console.log('15배수');
// } 
// else if(num5 % 5 ==0){
//     console.log('5배수');
// }
// else if(num5 % 3 == 0){
//     console.log('3배수');
// }


// 0~100의 점수가 들어있는 변수의 등급을 출려해보세요
// // 90점대 = 수 / 80점대 = 우 / 70점대 = 미 / 60점대 = 양, 59미만
// let score = 103;
// let grade = '';
// if(score<=100 && score>=90){
//     grade = '수';
// }
// else if(score<90 && score>=80){
//     grade = '우';
// }
// else if(score<80 && score>=70){
//     grade = '미';
// }
// else if(score<70 && score>=60){
//     grade = '양';
// }
// else if(score<59){
//     grade = '가';
// }
// else{
//     grade = '잘못된 점수';
// }
// console.log(grade);
