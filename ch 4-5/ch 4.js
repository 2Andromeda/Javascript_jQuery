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
    for(i=0; )
}