$(document).ready(function(){
    $("#btn1").click(function(){
        document.getElementById("ch12_01h").innerHTML = $("#test1").text();
    });
    $("#btn2").click(function(){
        document.getElementById("ch12_01h").innerHTML = $("#test1").html(); //()안에 빈칸이면 요소의 값 불러오기, ()안에 내용이 들어가면 해당 내용으로 대체
    });
    $("#btn3").click(function(){
        document.getElementById("ch12_01h").innerHTML = $("#test2").val();
    });
    $("#btn4").click(function(){
        $("#test2").attr("type", "button"); // attr도 동일하게 없으면 요소의 값 출력/ 있으면 해당 내용으로 대체
    });

    $("#btn5").click(function(){
        $("#ch12_06").height(100);
    });
    $("#btn6").click(function(){
        $("#ch12_06").height(function(n, c){
            return c+20;
        });
    });
    /*
    height() : 요소 내부 높이
    innerHeight() : height + padding
    outerHeight() : innerHeight + border = height + padding + border
    outerHeight(true) : outerHeight + margin = height + padding + border + margin
    */
    $("#offset1").click(function(){
        $("#offset").offset({top: 100, Left: 50});
    });
    $("#offset2").click(function(){
        $("#offset").offset(function(n, c){
            newPos = new Object();
            newPos.left = c.left +20;
            newPos.top = c.top +20;
            return newPos;
        });
    });
    $("#offset3").click(function(){
        $("#offset").offset($("#newoff").offset());
    });

    $(window).scroll(function(){
        if($(document).scrollTop() > 50){
           $("#scroll").addClass("test"); 
        }
        else{
            $("#scroll").removeClass("test");
        }
    });
    $(window).scroll(function(){
        var sc = $(document).scrollTop();
        document.getElementById("scrollt").innerHTML = sc;
    });

    $(".wrapb").click(function(){
        $(".wrap").wrap("<div></div>");
        //$(".wrap").wrap(document.createElement("div")); //2번째 방법
        /*$(".wrap").wrap(function(){
            return "<div></div>";
        })*/ //3번째 방법
    });

    $(".wrapAllB").click(function(){
        $(".wrap").wrapAll("<div></div>");
    });
    $(".wrapIn").click(function(){
        $(".wrap").wrapInner(document.getElementById("b"));
    });

    $("#parent").click(function(){
        $("span").parent().css({"color":"red", "border":"2px solid green"});
    });
    $("#parentIn").click(function(){
        $("span").parent("li").css({"color":"red", "border": "2px green solid"});
    });
    $("#parentInFirst").click(function(){
        $("span").parent("li.first").css({"color":"red", "border": "2px green solid"});
    });
    $("#parents").click(function(){
        $("span").parents().css({"color":"red", "border": "2px green solid"});
    });
    $("#parentsIn").click(function(){
        $("span").parents("ul").css({"color":"red", "border": "2px green solid"});
    });
    $("#parentsDouble").click(function(){
        $("span").parents("li, div").css({"color":"red", "border": "2px green solid"});
    });
    $("#parentsUntil").click(function(){
        $("span").parentsUntil("div", "ul").css({"color":"red", "border": "2px green solid"});
    });
    $("#closest").click(function(){
        $("span").closest("ul").css({"color":"red", "border": "2px green solid"});
    });
    /* $("button").click(function(){
        var treeTraversal = $("span").parents().map(function(){
            return this.tagName;
        }).get().join(",");
        $("span").after("<h2>" + treeTraversal + "<h2>");
    })
     */
    // 요소의 조상 요소 반환하기
});