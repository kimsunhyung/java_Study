// function printwhat(what){
//     console.log(what);
// }
// // let str2 ='초코우유';
// // printwhat(str2);

// let print = function(){ // 함수표현식
//     console.log('print');
// };
// print(); // 변수지만 함수다
// // 자바스크립트에서는 함수가 1급 객체이기 때문에 가능

// function(){
//     console.log("익명함수!");
// } // 익명함수

// (function(){
//     console.log("익명함수!");
// })(); // 즉시실행함수

// function 정답함수(){  //콜백함수 - 다른 함수의 인자로 전달되는 함수! 
//     console.log('정답입니다!');
// }
// function 오답함수(){  //콜백함수
//     console.log('오답입니다!');
// }


// function matchQuiz(answer, printTrue, printFalse){
//     if(answer=='무령왕릉'){
//         printTrue();
//     }else{
//         printFalse();
//     }
// }
// matchQuiz('광개토대왕릉',정답함수, 오답함수);


// // 동기 = synchronous 요청 결과가 동시에 일어남. 서로다른 두개의 객체가 동시간때 작동
// // 비동기 = unsynchronous 요청 결과가 동시에 일어나지 않음. 

// // isOdd(판단할숫자, 짝수일때호출할함수, 홀수일때호출할함수)
// function isOdd(판단할숫자, 짝수일때호출할함수, 홀수일때호출할함수){
//     if(판단할숫자%2==0){
//         짝수일때호출할함수();
//     }else{
//         홀수일때호출할함수();
//     }
// }
// function callBackEven(){
//     console.log('짝수 짝수 짝수 짝수');
// }
// function callBackOdd(){
//     console.log('홀수 홀수 홀수 홀수');
// }
// isOdd(45678, callBackEven, callBackOdd);

// function sum(num1,num2){
//     console.log(num1+num2);
// }
// sum(2,4,7)// 자바스크립트에서는 정의된 파라미터가 넘는 갯수가 전달되면 뒤에것은 무시하고 출력
// sum('이','five');
// sum(30);

// isOdd(판단할숫자, '짝수', '홀수')


// function introduce(firstName,lastName,hello){
//     if(lastName==='hong'||lastName==='홍'){
//         let fullName = lastName+firstName;
//         hello(fullName);
//     }
// }
// function hello(이름){
//     console.log(`안녕하세요 반갑습니다 제이름은 ${이름} 입니다`);
// }
// introduce('길동','홍',hello);

// 함수
// 함수란? input 을 넣었을때 본문을 실행하고 output을 리턴하는 코드의 묶음
// 왜 사용하는가? 코드를 모듈화하여 반복을 막기위해 -> 유지보수의 용이성
// 어떻게 정의하는가?
    // 함수 선언식 : function 함수명(인풋1, 인풋2){본문};
    // 함수 표현식 : let 변수명 = function(인풋1, 인풋2){본문};
        // 함수표현식 : 이름이 없는 익명함수를 만들고 이름을 가진 변수에 할당하는 방법
        // 자바스크립트에서는 함수가 일급객체이기에 가능
        // tdz에 빠질수 있다
// 호이스팅 = 선언을 제일위로 끌어올리는 자바스크립트 내장 기능
// - 정의된 파라미터(매개변수)보다 아규먼트(전달인자)가 적게 들어오면 undefined
// 정의된 파라미터보다 아규먼트가 많이 들어오면 무시되고 실행됨
// 함수는 return 값; 을 만나면 실행을 멈추고 함수를 호출한 곳에 값을 반환

//함수명 :isApple/ 첫번째 파라미터:  한글사과, 두번째 파라미터 영어사과
// 사과와 apple인지를 확인하고 맞으면 true 틀리면 false


// function isApple(한글로사과,영어로사과){
// if(한글로사과==='사과'&&영어로사과==='apple')
// return true;
// else{
//     return false;
// }
// }
// isApple(사과,apple)

// 함수 심화(2교시)
// // -콜백함수 = 
// function introduce(firstName,lastName,hello)
// lastname이 '홍'이거나 'hong'일때만  hello 실행
// hello 함수는 성과 이름을 붙여서 자기를 소개하는 함수 입니다.

// function introduce(firstName,lastName,hello){
//     if(lastName==='hong'||lastName==='홍'){
//         let fullName = lastName+firstName;
//         hello(fullName);
//     }
// }
// function hello(이름){
//     console.log(`안녕하세요 반갑습니다 제이름은 ${이름} 입니다`);
// }
// introduce('길동','홍',hello);

// // 함수 이름 : addTotal 인풋 : 자연수 1개 본문 : 1부터 입력받은 자연수까지 숫자 1씩을 더한 모든 자연수의 합을 리턴
// function addTotal(number){
//     let total = 0; // total 리턴할 값 설정
//     for(let i = 1; i<=number; i++){
//         total += i;
//     }
//     return total;
// }
// console.log(addTotal(19));

// 위의 퀴즈를 반복문 없이

// function sigma(number){
//     if(number<1){
//         return 0;
//     }
//     return sigma(number-1)+number;
// }
// console.log(sigma(2));

//팩토리얼을 만들어보시오
// function factorial(number){
//     if(number<=1){
//         return 1;
//     }
//     return factorial(number-1)*number;
// }
// console.log(factorial(19));

// // buyMouse()
// let 삼성 = 35000;
// let dell = 32000;
// let lg = 28000;
// let razor = 60000;
// function buyMouse(브랜드, 지불할돈){
//     let 거스름돈 =0;
//     switch(브랜드){
//     case '삼성':
//         거스름돈 = 지불할돈- 35000;
//         break;
//     case 'dell':
//         거스름돈 = 지불할돈- 32000;
//         break;
//     case 'lg':
//         거스름돈 = 지불할돈 - 28000;
//         break;
//     case 'razor':
//         거스름돈 = 지불할돈 - 60000;
//         break;
//     default:
//         거스름돈 = -99999;
//     }
//     return 거스름돈;
// }
// console.log(buyMouse('삼성',35000));

// function howManyBuy(){
//     let brand='삼성';
//     let money = 34000;
//     let 거스름돈 = 0;
//     let 갯수 = 0;
//     do{
//         거스름돈 = buyMouse(brand, money);
//         갯수++;
//     }while(거스름돈>=0)
//     console.log('최종구매갯수:'+갯수);
// }
// howManyBuy();