$(document).ready(function(){
    $("#review_more_user").hide();
    $(".review_more_link").click(function(){
        $("#review_more_user").show();
    });
    $("#review_more_user_off").click(function(){
        $("#review_more_user").hide();
    });
});

// 공감 하트
$(".helpful").click(function(){
    if($(this).hasClass("purple")){
        var imageUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIKICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoCiAgICBkPSJNNC4wNDgzNyAxMi45OTk4SDIuMjE5MzVDMS41NDU5MiAxMi45OTk4IDEgMTIuNDYyNiAxIDExLjc5OTlWNy41OTk5MkMxIDYuOTM3MTggMS41NDU5MiA2LjM5OTkzIDIuMjE5MzUgNi4zOTk5M0g0LjA0ODM3TTguMzE2MDggNS4xOTk5NVYyLjc5OTk4QzguMzE2MDggMS44MDU4OCA3LjQ5NzIgMSA2LjQ4NzA2IDFMNC4wNDgzNyA2LjM5OTkzVjEyLjk5OTlIMTAuOTI1NUMxMS41MzM1IDEzLjAwNjYgMTIuMDUzNyAxMi41NzE1IDEyLjE0NDggMTEuOTc5OUwxMi45ODYyIDYuNTc5OTNDMTMuMDM5OSA2LjIzMTg1IDEyLjkzNTUgNS44NzgxMiAxMi43MDA4IDUuNjEyNDVDMTIuNDY2IDUuMzQ2NzggMTIuMTI0NiA1LjE5NTk2IDExLjc2NjggNS4xOTk5NUg4LjMxNjA4WiIKICAgIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIxLjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==";
        $(this).find(".user_heplful").css("backgroundImage", "url('" + imageUrl +"')");
        $(this).css("color", "gray");
        $(this).removeClass("purple");
    } else {
        var imageUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIKICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoCiAgICBkPSJNNC4wNDgzNyAxMi45OTk4SDIuMjE5MzVDMS41NDU5MiAxMi45OTk4IDEgMTIuNDYyNiAxIDExLjc5OTlWNy41OTk5MkMxIDYuOTM3MTggMS41NDU5MiA2LjM5OTkzIDIuMjE5MzUgNi4zOTk5M0g0LjA0ODM3TTguMzE2MDggNS4xOTk5NVYyLjc5OTk4QzguMzE2MDggMS44MDU4OCA3LjQ5NzIgMSA2LjQ4NzA2IDFMNC4wNDgzNyA2LjM5OTkzVjEyLjk5OTlIMTAuOTI1NUMxMS41MzM1IDEzLjAwNjYgMTIuMDUzNyAxMi41NzE1IDEyLjE0NDggMTEuOTc5OUwxMi45ODYyIDYuNTc5OTNDMTMuMDM5OSA2LjIzMTg1IDEyLjkzNTUgNS44NzgxMiAxMi43MDA4IDUuNjEyNDVDMTIuNDY2IDUuMzQ2NzggMTIuMTI0NiA1LjE5NTk2IDExLjc2NjggNS4xOTk5NUg4LjMxNjA4WiIKICAgIHN0cm9rZT0iIzVmMDA4MCIgc3Ryb2tlLXdpZHRoPSIxLjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==";
        $(this).find(".user_heplful").css("backgroundImage", "url('" + imageUrl +"')");
        $(this).css("color", "purple");
        $(this).addClass("purple");
    }
});

// 처음에 글 안보이게
$(document).ready(function(){
    $(".notice_content.first").hide();
})

$(document).ready(function(){
    $(".notice_content.second").hide();
})

// 공지글
function notice_click1(){
    if($(".notice_content.first").css('display') == 'none'){
        $(".notice_content.first").show();
    }else{
        $(".notice_content.first").hide();
    }
}

function notice_click2(){
    if($(".notice_content.second").css('display') == 'none'){
        $(".notice_content.second").show();
    }else{
        $(".notice_content.second").hide();
    }
}

// 제일 먼저 추천순이 보이게
$(document).ready(function(){
    $(".user_post_div_first.second").hide();
})

// 최근 등록순
$(document).ready(function(){
    $(".last_registration").click(function(){
        $(".user_post_div_first.second").show();
        $(".user_post_div_first.first").hide();
        $(".last_registration").css("color", "rgb(51, 51, 51)");
        $(".number_of_recommendations").css("color", "rgb(153, 153, 153)");
        $(".notice_content.first").hide();
        $(".notice_content.second").hide();

    })
})

// 추천순
$(document).ready(function(){
    $(".number_of_recommendations").click(function(){
        $(".user_post_div_first.first").show();
        $(".user_post_div_first.second").hide();
        $(".last_registration").css("color", "rgb(153, 153, 153)");
        $(".number_of_recommendations").css("color", "rgb(51,51,51)");
        $(".notice_content.first").hide();
        $(".notice_content.second").hide();
    })
})

