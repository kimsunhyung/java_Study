// //객체 생성 -> let 객체명 = {키:값, 키:값}
// let cat = {
//     name : '뮤',
//     age : '4',
//     gender : '수컷',
//     weight : 8,
//     height : 50,
//     character : '앙칼짐',
//     like : '높은곳',

//     walk : function(){
//         console.log('걷습니다');
//     },
//     jump : function(){
//         console.log('점프를 합니다');
//     },
//     eat : function(){
//         console.log('먹습니다');
//     },
//     cry : function(){
//         console.log('냐옹');
//     }
// }

// cat.cry();
// console.log(cat.age);

// 포켓몬 만들기 및 공격하기
let pokemon1 = {
    name : '피카츄',
    att : 10,
    def : 3,
    maxhp: 100,
    hp: 100,

    attack : function(enemy){
        console.log(`${this.name}가 ${enemy.name}을 ${this.att}의 데미지로 공격합니다`);
        enemy.hp = enemy.hp - (this.att - enemy.def);
        console.log(`${enemy.name}의 체력이${enemy.hp}가 되었습니다`);
    },
    intro : function(){
        console.log('피카피카');
    }
}

let pokemon2 = {
    name : '롱스톤',
    att : 7,
    def : 7,
    maxhp : 300,
    hp: 300,

    attack : function(enemy){
        console.log(`${this.name}가 ${enemy.name}을 ${this.att}의 데미지로 공격합니다`);
        enemy.hp = enemy.hp - (this.att - enemy.def);
        console.log(`${enemy.name}의 체력이${enemy.hp}가 되었습니다`);
    },
    intro : function(){
        console.log('롱스토온');
    },
    finish : function(enemy){
        if(enemy.hp<enemy.maxhp/10){
        enemy.hp=0;
        console.log('피니시');
        console.log(`${enemy.name}가 전투 불능 상태가 되었습니다`);
        };
        
    }
}

pokemon1.attack(pokemon2);
pokemon2.attack(pokemon1);

// 롱스톤 finish기술
// 적의 체력이 원래 체력의 10% 이하일때 적의 체력을 0으로 만드는 기술

for(let i=0;i<22; i++){
    pokemon2.attack(pokemon1);
}
pokemon2.finish(pokemon1);

// 생성자함수 = 객체를 생성할때 사용되는 함수 ->
//function 객체명(파라미터1,파라미터2){
//          this.변수명1 = 파라미터1
//          this.변수명2 = 파라미터2    
//}
// 생긴건 함수인데 변수가 있네? 자바스크립트는 함수가 일급객체이기때문에 가능
// 생성자 함수로 인스턴스 생성하는 법 -> let 인스턴트명 = new 함수명(인자);
function PokeMon(name, type, att, def, maxhp, sound){
    this.name = name;
    this.type = type;
    this.att = att;
    this.def = def;
    this.maxhp = maxhp;
    this.hp = maxhp;
    this.attack = function(enemy){
        switch(this.type){
            case '불':
                if(enemy.type =='풀'){
                    this.att=this.att*1.3;
                }else if(enemy.type == '물'){
                    this.att=this.att*0.7;
                } break;
            case '물':
                if(enemy.type =='불'){
                    this.att=this.att*1.3;
                }else if(enemy.type=='풀'){
                    this.att=this.att*0.7;
                }break;
            case '전기':
                if(enemy.type=='물'){
                    this.att=this.att*1.3
                }else if(enemy.type=='땅'){
                    this.att=this.att*0.7;
                }break;
        }
        console.log(`${this.name}가 ${enemy.name}을 ${this.att}의 데미지로 공격합니다`);
        enemy.hp = enemy.hp - (this.att - enemy.def);
        console.log(`${enemy.name}의 체력이${enemy.hp}가 되었습니다`);
    }
    this.intro = function(){
        console.log(sound);
    }
}
// this (이것)
// 1. 함수를 호출하는 객체를 가르킨다.
// 2. 자바스크립트의 모든함수는 명시적으로 정의한 매개변수 외에 arguments, this  객체를 암묵적으로 전달받음.

let pickachu = new PokeMon('피카츄','전기',25,5,100,'피카피카');
let firey = new PokeMon('파이리', '불',25,4,120,'파이리');
let kobugi = new PokeMon('꼬부기','물',20,3,150,'꼬북')
firey.attack(pickachu);
firey.intro();
pickachu.intro();
firey.attack(pickachu);

firey.진화 = function(){
    console.log('리자몬으로 진화');
}

//let 함수명 =function(){}; 익명함수
firey.진화();

// 프로토타입 = 원형, 최종부모, 근원,
// 포켓몬 >물포켓몬> 꼬부기

// 땅, 불, 물, 풀, 전기
// 불 => 땅에게 1.3데미지, 물에게 0.7배 데미지
// 물 => 불에게 1.3데미지, 풀에게 0.7배 데미지
// 전기 => 물에게 1.3데미지, 땅에게 0.7배 데미지
// 공격함수가 attack함수 뿐이다. => attack함수에 적용하기

// object(객체) = 프로그램으로 구현해야할 대상
    // 대상은 속성(변수)과 행동 (메서드)
    // 과자라는 객체는 속성만 있다// 브랜드,가격,무게,포장지재질, 이름
// oop(object oriented programmin)
    // 공통적인 개념을 객체의 단위로 묶어서 그것을 설계도로 쓰고
    // 설계도 대로 인스턴스를 공장처럼 찍어내는 방식의 개발 패러다임
    // 장점: 인간이 생각하는 방법. 협업하기 쉬움, 설계도를 만들어놓으면 찍어내기 좋음
    // 단점: 간단한거라도 설계도부터 만들어야한다.
    // 절차지향프로그래밍,객체지향프로그래밍, 함수형프로그래밍...
    // 절차지향프로그래밍 : 위에서부터 밑으로 한줄씩 절차대로 개발하는 방법론 -> c언어
        // 장점: 간단한 프로그래일경우 개발이 빠름// 설계도 없이 바로 실행가능
        // 단점: 유지보수가 어렵다 : 부분이 틀리면 전체가 오류
    // 함수형프로그래밍 : 외부환경으로부터 철저히 독립적 -> 스칼라 하스칼
// instance(인스턴스)
    // 생성자 함수 (설계도)를 new와 함께 호출하여 물리적으로 구현화된 실체
// 생성자 함수
    // 객체를 생성할때 쓰는 함수


//객체/생성자/인스턴스
// 시바견이라는 개념 : 객체
// 시바견의 유전자 : 생성자
// 우리집에 살고있는 시바견 : 인스턴스

// 에쿠스 : 객체
// 에쿠스 설계도 : 생성자
// 우리삼촌의 에쿠스 : 인스턴스
