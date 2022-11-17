$(function() {
    $('.s_click').click(function() {
        $('.s_click').css("color", "black");
        $(this).css("color", "rgb(95, 0, 128)");
    });
    $('#event_btn').click(function() {
        $('#event').css("margin-top", "-44px");
    });
});