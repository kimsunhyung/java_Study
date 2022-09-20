function myclick(){
    alert('내가만든 클릭함수가 실행됨');
}

let ele = document.getElementById('cola');
ele.onclick = function(){
    alert('html의 onclick요소에 할당한 함수 실행');
}

let keydownEle = document.getElementById('keydown2');
keydownEle.addEventListener('keydown',mykeyDownFunc);
function mykeyDownFunc(){
    console.log('키보드가 눌러졌습니다');
}

// 3번째 인풋에 값이 바뀌었음을 인지하면 1번째 인풋의 값을 바뀐값으로 세팅
let changeInputEle = document.getElementById('changeInput');
changeInputEle.addEventListener('change',function(){
    let firstEle = document.getElementById('follow3th');
    firstEle.value= changeInputEle.value;
})

// html에 input2개를 만들어서 두개의 합의 결과을 세번째 인풋에 실시간으로 계산

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let sum = document.getElementById('sum');
function addNum(){
    sum.value = Number(num1.value) + Number(num2.value);
}
num1.addEventListener('change',addNum);
num2.addEventListener('change',addNum);


//
let dogImg = document.getElementById('dogimg');
let btn1 = document.getElementById('btn1');
function clickSizeUp(img){
    img.width = img.width*2;
    img.height = img.height*2;
    // console.log(img.width);
    // console.log(img.height);
}
btn1.addEventListener('click',function(){
    clickSizeUp(dogImg);
});

let inputList = document.getElementsByTagName('input');
// console.log(inputList.length);
// console.log(inputList[0]);

let selectEle = document.querySelector('.redbull>input');
// console.log(selectEle);

let btn2 = document.getElementById('btn2');
function addText(){
    let heading = document.createElement('h3');
    let heading_text = document.createTextNode('동적으로만든요소');
    heading.appendChild(heading_text);
    ele.appendChild(heading);
};
btn2.addEventListener('click',addText);

let btn3 = document.getElementById('btn3');
btn3.onclick = function(){
    console.log(ele);
    let son = document.querySelectorAll("#cola > h3");
    for(let i=0;i<son.length;i++){
        ele.removeChild(son[i]);
        // son[i].remove();
    }
}

let 웰치스 = document.getElementById('welchs');
let i = 1;
function dbclickNum(){
    let newSpan = document.createElement('span');
    let text = document.createTextNode(i++);
    newSpan.appendChild(text);
    웰치스.after(newSpan);
    if(i>9){
        i=1;
    }
}
웰치스.addEventListener('dblclick',dbclickNum)

let btn4 = document.getElementById('btn4');
let targetText = document.getElementById('hear');
targetText.style.color = 'black';
function changeColor(){
    switch(targetText.style.color){
        case 'black':
            targetText.style.color = 'red';
            break;
        case 'red': 
            targetText.style.color = 'black';
            break;
    }

}
btn4.addEventListener('click',changeColor)

let p = document.getElementsByTagName('p');
let pvalue = p.value;

btn5.addEventListener('click',function(){
    console.log(pvalue);
})
