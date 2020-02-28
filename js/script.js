$(document).ready(function(){
    
    /*
    1단계 : 사용자가 클릭한 곳과 컴퓨터 랜덤 방식으로 나오게 된 결과값을 저장
    2단계 : 각 클릭한 곳에 해당하는 이미지 표현
    3단계 : 승패에 대한 결과값을 조건식으로 부여하여 작성
    4단계 : 각 승률에 대한 계산 적용
    */
    var f_0 = "바위";
    var f_2 = "가위";
    var f_5 = "보";
    //클릭한 곳의 결과(속성 rel의 속성값)와 컴퓨터에 의해 댄덤값을 저장
    
    var my_click;
    var com_result;

    //내가 이긴 횟수, 컴퓨터가 이긴 횟수, 비긴횟수, 게임을 진행한 횟수
    var $my_win = 0;
    var $com_win = 0;
    var $same_num = 0;
    var $total_game = 0;

    $(".sel_img li").click(function(){
        var $sel_btn = $(this).attr("rel");
        if($sel_btn=="f_0"){
            my_click = "f_0";
            $(".my_img").css("background-image", "url(img/finger_0.png)");
        }else if($sel_btn=="f_2"){
            my_click = "f_2";
            $(".my_img").css("background-image", "url(img/finger_2.png)");
        }else{
            my_click = "f_5";
            $(".my_img").css("background-image", "url(img/finger_5.png)");
        }
        var $com_random = Math.random();

        if($com_random<=0.33333333333){
            com_result = "f_0";
            $(".com_img").css("background-image", "url(img/finger_0.png)");
        }else if($com_random>0.33333333333 && $com_random<=0.66666666666){
            my_click = "f_2";
            $(".com_img").css("background-image", "url(img/finger_2.png)");
        }else{
            my_click = "f_5";
            $(".com_img").css("background-image", "url(img/finger_5.png)");
        }

        if(my_click == "f_0" && com_result =="f_2"){
            $my_win++;
            $(".final").text("당신이 이겼습니다!!! 이긴 횟수"+$my_win+"회");
        }else if(my_click == "f_2" && com_result =="f_5"){
            $my_win++;
            $(".final").text("당신이 이겼습니다!!! 이긴 횟수"+$my_win+"회");
        }else if(my_click == "f_5" && com_result =="f_0"){
            $my_win++;
            $(".final").text("당신이 이겼습니다!!! 이긴 횟수"+$my_win+"회");
        }else if(my_click == "f_0" && com_result =="f_5"){
            $com_win++;
            $(".final").text("당신이 졌습니다!!! 진 횟수"+$com_win+"회");
        }else if(my_click == "f_2" && com_result =="f_0"){
            $com_win++;
            $(".final").text("당신이 졌습니다!!! 진 횟수"+$com_win+"회");
        }else if(my_click == "f_5" && com_result =="f_2"){
            $com_win++;
            $(".final").text("당신이 졌습니다!!! 진 횟수"+$com_win+"회");
        }else if(my_click == com_result){
            $same_num++;
            $(".final").text("둘이 비겼습니다!!! 비긴 횟수"+$same_num+"회");
        }

        $total_game++

        $(".my_per").text($my_win+" / "+$total_game+" ("+parseInt(($my_win/$total_game)*100)+"%)");
        $(".com_per").text($com_win+" / "+$total_game+" ("+parseInt(($com_win/$total_game)*100)+"%)");
        
        return false;
    });






    
});