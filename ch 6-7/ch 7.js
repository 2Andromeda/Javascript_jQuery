function addButton(){
    var btn = document.createElement("button");
    var t = document.createTextNode("클릭하세요");
    btn.appendChild(t);
    btn.setAttribute("onclick", "addButton()");
    document.body.appendChild(btn);
}

function removeList(){
    var list = document.getElementById("myList");
    var x = list.removeChild(list.childNodes[0]);
    /* var x = list.removeChild(list.firstChild); */
}

function replaceList(){
    var textnode = document.createTextNode("water");
    var item = document.getElementById("myList2").childNodes[0];
    item.replaceChild(textnode, item.childNodes[0]);
}

function ch07_22(){
    var x = document.body.innerHTML;
    document.getElementById("ch07_22h").innerHTML = x;
}

function yellowBack(){
    document.body.style.backgroundColor = "yellow";
}

function changeText(id){
    id.innerHTML = "Ooops!";
}

function changeUpperCase(){
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function mOver(obj){
    obj.innerHTML = "Thank you";
}

function mOut(obj){
    obj.innerHTML = "Mouse Over Me";
}

function mDown(obj){
    obj.innerHTML = "Release Me";
}

function mUp(obj){
    obj.innerHTML = "마우스 업";
}

function focusFunction(fid){
    document.getElementById(fid).style.backgroundColor = "red";
}

function blurFunction(){
    document.getElementById("fname2").style.backgroundColor = "yellow";
}

function focusFunction3(fid){
    document.getElementById(fid).style.backgroundColor = "red";
}

function multiple(a, b){
    var result = a * b;
    document.getElementById("ch_40h").innerHTML = result;
}

function validateForm(){
    var x = document.forms["myForm"]["fname2"].value;
    if (x == ""){
        alert("이름은 작성되어야 합니다.");
        return false;
    }
}

function checkEmpty(ids, min, max){
    var cont = document.getElementById(ids);
    if(cont.value.length <= min || cont.value.length >= max){
        alert("기본 자릿수를 벗어났습니다.");
    }
}

function checkDateForm(ids){
    var x;
    var exp = /^\d{4}\/\d{1,2}\/\d{1,2}/;
    var val = document.getElementById(ids).value;
    if(val.match(exp)){
        alert("잘 입력했습니다.");
    }
    else{
        alert("잘못 입력했습니다.")
    }
    document.getElementById("ch07_72h").innerHTML=x;
}