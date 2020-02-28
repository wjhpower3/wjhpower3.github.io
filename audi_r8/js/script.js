$(document).ready(function(){

    function lamp(){
        $(".skip").delay(1000).fadeIn(1000);
        $(".top").delay(1500).animate({"width":"100%"}, 300, function(){
            $(".top").animate({"left":"100%"}, 200, function(){
                $(".top").css("width","0");
            });
        });
        $(".bot").delay(1800).animate({"width":"100%"}, 300, function(){
            $(".bot").animate({"left":"100%"}, 200, function(){
                $(".bot").css("width","0");
            });
        });
        $(".first").delay(3500).animate({"opacity":"1"},1000, function(){
            $(".second").animate({"opacity":"1"},1000, function(){
                $(".third").animate({"opacity":"1"},1000, function(){
                    $(".first, .second, .third").delay(1000).animate({"opacity":"0"},1000, function(){
                        $(".car .title").delay(1000).slideDown(500);
                        $(".slide_menu").delay(1300).slideDown(500);
                        $(".car img").animate({"left":"30%"},1000);
                        $(".full").fadeOut(500);
                    });
                });
            });
        });
    };
    lamp();

    $(".skip").click(function(){
        $(".car .title").delay(500).slideDown(500);
        $(".slide_menu").delay(500).slideDown(1000);
        $(".car img").animate({"left":"30%"},1000);
        $(".full").fadeOut(500);
    })

    
    











    
});