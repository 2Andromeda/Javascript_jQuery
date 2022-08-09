function toggle(a){
    if(a=='김자기'){
        return '정자기';
    }
    else{
        return '김자기';
    }
}

var star = {/*객체 정의1*/
    color : 'red',
    max_diameter : 30,
    min_diameter : 10,
    max_radius : function(){
        var max_x=this.max_diameter/2;
        return max_x;
    },
    min_radius : function(){
        var min_x=this.min_diameter/2;
        return min_x;
    }
};

var myCar2 = new Object()/* 객체 정의2*/
myCar2.type='BMW';
myCar2.color='Blue';

function Car(model, speed, color){/* 객체 생성 3, 생성자 방법*/
    this.model = model || "빈칸";
    this.speed = speed || 50;
    this.color = color || "검정";
    this.bbreak=function(){
        this.speed -=10;
    }
    this.accel= function(){
        this.speed +=10;
    }
}

function ch05_21(point){
    point.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("ch05_21h").innerHTML = point;
}

function ch05_24(carv){
    carv.sort(function(a,b){return a.year - b.year});
    displayCars(carv);
}
function displayCars(carv){
    document.getElementById("ch05_24h").innerHTML =
    carv[0].type + " " + carv[0].year + "<br>" +
    carv[1].type + " " + carv[1].year + "<br>" +
    carv[2].type + " " + carv[2].year + "<br>";
}

function ch05_34(str1){
    var txt = str1.replace("java", "javaScript");
    document.getElementById("ch05_34_1h").innerHTML = txt;
    var txt = str1.replace(/java/g, "javaScript");//str1 의 모든 java에 대해 적용
    document.getElementById("ch05_34_2h").innerHTML = txt;
    var txt = str1.replace(/JAva/ig, "javaScript2");//i= 대소문자 구분 삭제
    document.getElementById("ch05_35h").innerHTML = txt;
}

function ju_search(){
    var x = calculator.number1.value;
    var patn01 = /\d{6}-[12]\d{6}/;
    if (patn01.test(x)){
        document.getElementById("ch05_58h").innerHTML = patn01.exec(x);
    }
}

function childCar(model, speed, color){
    this.model = model;
    this.speed = speed;
    this.color = color;
}
childCar.prototype = new Car();

function ch05_71(){
    var x = document.getElementById("ch05_71h").value;
    try{
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        else if(x>10) throw "too high";
        else throw "good data";
    }
    catch(err){
        document.getElementById("message").innerHTML = "입력이" + err;
    }
}