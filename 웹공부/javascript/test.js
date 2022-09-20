let changeInput = document.getElementById("changeInput");   //3번째요소 가져옴
changeInput.addEventListener("change", function(){
    let firstEle = document.getElementById("follow3th");    //1번째요소 가져옴
    //3번째요소의 값을 1번째요소에 값으로 대입
    firstEle.value = changeInput.value;
})

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let sumResult = document.getElementById("sumResult");
input1.onchange = function () {
    sumResult.value = Number(input1.value) + Number(input2.value);
}
input2.onchange = function () {
    sumResult.value = Number(input1.value) + Number(input2.value);
}
function sumTwoNum(ele1, ele2, ele3) {
    sumResult.value = Number(input1.value) + Number(input2.value);
}

//리팩토링 코드
input1.onchange = function () {
    sumTwoNum(input1, input2, sumResult);
}
input2.onchange = function () {
    sumTwoNum(input1, input2, sumResult);
}
function sumTwoNum(ele1, ele2, ele3) {
    ele3.value = Number(ele1.value) + Number(ele2.value);
}