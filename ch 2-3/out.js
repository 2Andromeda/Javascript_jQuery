alert('Hello Javascript');

function inputFun(){
    var x = document.getElementById("input_id").value;
    document.getElementById("output_id").value = x;
}

function Calculator(){
    var x = Number(document.calculator.number1.value);
    var y = Number(document.calculator.number2.value);
    var result = x + y;
    document.calculator.result.value=result;
}

function calc_c(){
    var a;
    temp = prompt("성적을 입력", "0~100사이의 정수 입력");
    a = parseInt(temp);
    if(a>=90){
        document.getElementById("result").value="A학점"
    }
}

var a, cunt =0, num, difference;
function setting(){
    cunt=0;
    document.getElementById('retry').value = cunt;
    num = parseInt(Math.random() * 100);
}
function find_n(){
    difference = Math.abs(Number(document.getElementById('x').value) - num);
    
    if(difference == 0){
        document.getElementById('diff').value = "축하합니다";
    }
    else{
        cunt++;
        document.getElementById('retry').value = cunt;
        document.getElementById('diff').value=difference;
    }
}