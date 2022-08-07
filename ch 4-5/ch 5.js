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

var myCar = new Object()/* 객체 정의2*/
myCar.type='BMW';
myCar.color='Blue';

