// console.log.apply(r); //3. 사용 is not defined라는 오류가 뜸
// r= 5; // 2. 할당 라고 해도 defined로 오류가뜸
// // let r; // 1. 선언
// // // let으로 선언 시 cannot access 'r' before initialization
// // // var일때는 에러안뜸

// let result = '초기화한 리절트';
// console.log(result);
// age = 50;
// if(age<100){
//     result = '100살 미만입니다';
//     console.log('if문 안에서 찍은 result:' +result);
// }

// // 블록의 유효범위 var는 함수유효범위, let은 블록 유효범위
// var number = 10;
// if(number >5){ // if는 함수가 아니기 떄문에 var가 블록을 무시함
//     var number =50;
// }
// console.log(number); // var로 실행하면 50 이 찍히지만 let으로 실행하면 10이 찍힘

// for(let i=1; i<5; i++){
//     console.log(i);
// }
// console.log('포문이 끝난뒤의 i:'+i);
// // i가 let일때 not defined
// // i가 var일때 5가 찍힘

// var problem = '전역변수';
// function 바는문제(){
//     var problem='지역변수';
//     console.log('함수 안에서 찍은 변수:'+problem);
// }
// console.log('함수 밖에서 찍은 변수:'+problem) // 함수일때는 블록이 유효함

// // let  사용 시 코드 해석 문제 x, var 사용된 것을 해석 시 어려움
// var = 재선언된다, 블록범위가 함수일때만 유효
