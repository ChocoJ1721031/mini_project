$(function() {
    var cnt = 0;
    $('.mypage_mid_r_t_r_time').click(function() {
        cnt += 1;
        if(cnt == 2){
            $('.mypage_mid_r_t_r_timechoice').css("display", "none");
            $('.mypage_mid_r_t_r_time > span').css("transform", "rotate(0deg)");
            cnt = 0;
        } else{
            $('.mypage_mid_r_t_r_timechoice').css("display", "block");
            $('.mypage_mid_r_t_r_time > span').css("transform", "rotate(180deg)");
        }
        console.log(cnt);
    }); //transform: translate(50%, -50%) rotate(180deg);
    $('.mypage_mid_r_t_r_li').click(function() {
        // 폰트 디자인
        $('.mypage_mid_r_t_r_li').css("color", "black");
        $('.mypage_mid_r_t_r_li').css("font-weight", "200");
        $(this).css("color", "rgb(95, 0, 128)");
        $(this).css("font-weight", "500");
        // 클릭시 박스 닫기
        $('.mypage_mid_r_t_r_timechoice').css("display", "none");
        $('.mypage_mid_r_t_r_time > span').css("transform", "rotate(0deg)");
        cnt = 0;
        // 텍스트 변환
        $(".mypage_mid_r_t_r_time_text").text($(this).text());
        var mtext = $(this).text() + "간의 주문내역이 없습니다.";
        $(".mypage_mid_r_b_1_text").text(mtext);
    });
});