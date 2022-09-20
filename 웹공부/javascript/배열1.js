// let colorArr=['빨', '주', '노', '초', '파', '남', '보'];
// console.log(colorArr);
// console.log(colorArr[1]); //1번 인덱스에 있는 값 출력
// colorArr[2] = '노란색' // 원래 리스트를 변경 
// console.log(colorArr[2]);

// let strNumar = new Array('zero', 'one', 'two','three');
// console.log(strNumar[3]);

// let arr1 = ['1','이',3,'four',4, 5, 'five', 5, 5]; // 자바에서는 불가
// console.log(arr1);
// //숫자 5의 값을 가진 첫번째 인덱스
// console.log(arr1.indexOf(5));// 숫자 5의 값을 가진 첫번째 인덱스
// console.log('길이 : '+ arr1.length); // arr1의 길이
// console.log(arr1[10]); // undefined

// //대부분의 언어에서 배열은 데이터 타입이 같아야하고, 길이가 고정되어 변경될 수 없다

// for(let i=0; i<arr1.length; i++){
//     console.log(arr1[i]);
// }

// for(let 원소 of arr1){
//     console.log("향상된 포문에서 찍은 원소 : " +원소);
// }

// //동물 다섯마리를 배열해놓고 하나의 동물이름이 있는지 검사하는 함수
// let animals = ['tiger', 'lion', 'rabbit', 'rat', 'cat', 'dog', 'whale'];
// function isExist(name,arr){
//     for(let i=0; i<arr.length; i++)
//         {if(name == arr[i]){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isExist('tigerjk',animals));

// 한글로 연예인 배열을 주고 이름이 2글자인 연예인이 몇명인지 리턴하는 함수
// let celebs = ['김종국', '유재석', '강호동', '김구', '하이', '진성'];
// function count2char(nameList){
//     let 갯수 = 0;
//     for(let i=0; i<nameList.length; i++){
//         if(nameList[i].length == 2){
//             갯수 ++;
//         }
//     }
//     return 갯수;
// }
// console.log(count2char(celebs));

// //막무가내 좀 긴 숫자 6개 정도 넣은 배열에서 제일 큰 숫자 출력
// //
// let Biggest = [123,3454,55655,565555,557,8555556998,1111];
// function printBiggest(list){
//     let bigint = list[0];
//     //
//     for(let i=0; i<list.length; i++){

//         if(list[i] > bigint){

//             bigint= list[i];

//         }
//         // console.log(bigint);
//     }
//     return bigint;
// }
// console.log(printBiggest(Biggest))
// // 함수이름(변수)

// 함수이름(a)

// //Math.random(을 쓰면 0-1까지의 소수가 생성)
// //0부터 100까지 랜덤정수가 나오는 함수
// function makeRandomInt(howMany){
//     let arr =[];
//     for(let i=0; i<10; i++){
//         arr[i]=Math.floor(Math.random()*100);
//     }
//     return arr;
    
// }

// function isOverFifty(randomArr){
//     let count =0;
//     let arr = makeRandomInt();
//     console.log('만들어진 랜덤배열 : ' +arr)
// ;    for(let i=0; i<arr.length; i++){
//         if(arr[i]>=50){
//             count++;
//         }
//     }
//     return count;
// }
// console.log('50이상의 갯수는 : '+ isOverFifty());

//첫번쨰 인자 가장큰수와 두번째 인자 가장 작은 수의 곱

// function mulMAxMin(arr1,arr2){
//     let maxNum = Math.max.apply(null,arr1);
//     let minNum=Math.min.apply(null,arr2);
//     return maxNum*minNum;
// }
// let numList1 = [11,15,51,97];
// let numList2 = [11,8,5,2];
// mulMAxMin(numList1,numList2);
// let result = mulMAxMin(numList1,numList2);
// console.log(result);

// 숫자 n개를 들어있는 매열을 인자로 받아서 오름차순으로 정렬한 배열을 리턴하는 함수 이중반복문

// //숫자가 들어있는 배열을 받아 5의 배수만 골락서 반환하는fiveth함수
// function fiveth(inputArr){
//     let outputArr = [];
//     let j = 0;
//     for(i=0; i<inputArr.length; i++){
//         if(inputArr[i]%5==0){//함수로 전달된 배열의 i번째 인덱스 요소를 순회하면서 5로 나눈다. 
//             outputArr[j] = inputArr[i];
//         }
//     }return outputArr;
// }
// let 인풋데이터 = [133,134,135,165,175];
// console.log(fiveth(인풋데이터));

//숫자가 들어있는 배열을 받아서 배열의 모든 숫자의 평균을 반환하는 getAverage함수 요소중에 숫자가 아닌 
//요소가 있다면 걸러내야함.
// 함수설정, 배열생성, 숫자 평균을 반환하는 본문, 요소중 숫자가 아닌것은 걸러내야함.

// let 인풋데이터2 = [1,2,3,4,5,6,7,8,9,10];
// function getAverage(inputArr){
//     // 평균 = 숫자들의 총합/ 숫자들의 갯수
//     let total = 0;
//     let count = 0;
//     let average;

//     for(let ele of inputArr){
//         if(typeof(ele)=='number'){
//             total += ele;
//             count++; 
//         }
//     }
//     average = total/count;
//     return average;
// }
// console.log(getAverage(인풋데이터2));