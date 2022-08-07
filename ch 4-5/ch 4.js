function ch04_1(a,b) {
    return a*b;
}

var ch04_2 = new Function("a", "b", "return a*b");

function ch04_5(a,b){
    return arguments.length;
}

function ch04_6(){
    document.write("명시적(선언적) 함수");
}

function findMax(){
    var i;
    var max = -Infinity;
    for (i = 0; i< arguments.length; i++){
        if (arguments[i] > max){
            max=arguments[i];
        }
    }
    return max;
}

function sumAll(){
    var i, sum = 0;
    for(i=0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

function add(x,y){
    var sum;
    sum = x + y;
    return sum;
}

function ch04_19(x,y){
    if (y == undefined){
        y = 25;
    }
    document.write(x + "가" + y + "개 있습니다." + "<br>");
}

function toCelsius(f) {
    return (5/9)*(f-32);
}

function recursion(x){
    if(x==0){
        document.write("함수 실행 종료");
    }
    else{
        document.write("재귀함수(recursion)이 호출될때의 x 값:" + x + "<br>");
        recursion(x-1);
    }
}

function compare(a,b){
    return a-b;
}

var counter=0;
function addCounter(){
    return counter+=1;
}
function myfunc(){
    document.getElementById("demo").innerHTML=addCounter();
}

