$(function() {
    $('.s_click').click(function() {
        $('.s_click').css("color", "black");
        $(this).css("color", "rgb(95, 0, 128)");
    });
    $('#event_btn').click(function() {
        $('#event').css("margin-top", "-44px");
    });

    //링크 이동 추가
    $(".f_f_1_1 button").attr("onclick","location.href='./notice.html';");
    $(".h_f_1_a1_hover > div").attr("onclick","location.href='./mypage.html';");
    $(".h_f_1_a1_hover > div:last-of-type").attr("onclick","location.href='./index.html';");

});