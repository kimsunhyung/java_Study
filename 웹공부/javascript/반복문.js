// //for(시작; 조건; 스탭){조건 만족 시 실행할 코드}
// // for(let a = 1; a<=100; a++){
// //     console.log(a);
// // }
// // // 1부터 100까지의 3의 배수
// // // 1부터 100까지 반복
// // // 3의 배수인지 검사
// // // 3배수 출력
// // for(let a = 1; a<=100; a++){
// //     if(a%3==0){
// //         console.log(a);
// // }
// // }

//1부터 100까지 3의 배수를 출력
// // for(let a =1; a<=100; a++){
// //     if(a%3 == 0){
// //         console.log(a);
// //     }
// // }

// 1분터 100까지 총합 출력
// let sum = 0;
// for(let i =1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);

// 1부터 100까지 7의 배수가 몇개 인가?
// let count = 0;
// for(let a = 1; a <=100; a++){
//     if(a % 7 == 0){
//         count++;
//     }
// }
// console.log(count)

// //10부터 1000까지의 정수중에 짝수만 큰수부터 출력
// for(let a = 1000; a>=10; a--){
//     if(a % 2 == 0){
//         console.log(a);
//     }
// }

//12345보다 크고 67890보다 작은수 중 25의 배수가 몇개인가요
// let count = 0;
// for(let a = 12345; a<67890; a++){
//     if(a % 25 == 0){
//         count++;
//     }
// }
// console.log(count)

//숫자를 0부터 무한으로 1씩 증가하다가, 17의 배수이며, 짝수, 35의 배수인 수를 만나ㅏ면 그수를 출력하고 멈춰
// break; = 탈출
// continue; = 반복만 탈출, 다음 조건부터 반복
// for(let a = 1; a < Infinity; a++){
//     if(a % 17==0){
//         if(a % 2==0){
//             if(a % 35==0){
//                 console.log(a);
//                 break;
//             }
//         }
//     }
// }

// let ans;
// for(let i=1; true; i++){
//     if(i%17==0 && i%2==0 &&i%35==0){
//         ans=i;
//         break;
//     }
// }
// console.log(ans);

// 2단부터 9단까지 구구단을 출력 - 이중 반복문을 실행하라
// for(let a = 2; a<=9; a++){
//     for(let b = 1; b<=9; b++){
//         console.log(a+'X'+b+'='+a*b); 
//             // 템플릿 리터럴 console.log(`${a} X ${b} = ${a*b}`)을 사용하면 조금더 편리!
//     }
// }

//while문- 범위 안에서 조건이 맞으면 실행
// let maxNum = 50
// let num1 = 3;
// while(num1<maxNum){
//     console.log(num1++);
// }

//do while 문 - 한번은 실행하고 조건을 본다

let maxhi = 50;
let num22 = 300;
do{
    console.log(num22++);
}while(num22<maxhi);
