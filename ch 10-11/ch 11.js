$(document).ready(function(){
    $("#ch11_01h").click(function(){
        $("#apple").animate({width:400, opacity: 0.8});
    });
    $("#ch11_02h").click(function(){
        $("#apple").animate({width: '+=30px', left: '+=30px'},2000);
    });
    $("#p1").click(function(){
        $("#apple").animate({margin : "+=10px"});
    });
    $("#p2").click(function(){
        $("#apple").animate({margin: "-=10px"});
    });
    $("#stop").click(function(){
        $("#apple").stop(false, true);
    });
    $("#slide").click(function(){
        $("#apple").slideToggle(2000);
    });
    $(".ex .hide").click(function(){
        $(this).parents(".ex").hide();
    });
    $("#fade").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div1").fadeTo("slow", 0.4);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    });
    $("#queb").click(function(){
        var div = $("#que");
        div.animate({height:300}, "slow");
        div.animate({width:300}, "slow");
        div.animate({opacity : 0.5}, "slow");
        // div.queue(function(){
        //     div.css("background-color", "red");
        //     div.dequeue();
        // });
        div.animate({height:100}, "slow");
        div.animate({width:100}, "slow");
    });
    $("#call").click(function(){
        $("#apple").hide("slow",message());
    });
    $("#nocall").click(function(){
        $("#apple").hide("slow");
        alert("이미지는 사라질겁니다.");
    })
    $("#chaning").click(function(){
        $("#apple").animate({width:500}).slideUp(2000).slideDown(2000);
    })

    function message(){
        alert('이미지는 곧 사라집니다.');
    }
});