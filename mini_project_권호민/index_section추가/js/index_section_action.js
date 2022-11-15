window.onload = function() {
    var a = 0;
    document.getElementById("insta_sButton").onclick = function () {
        a += -1068;
        var t_value = "translate3d(" + a +"px, 0px, 0px)";
        document.getElementsByClassName("m_s_3_list_swiper_wrap")[0].style.transform = t_value;

        document.getElementById("insta_fButton").style.display = "inline-block";
        if(a == -1068*2) {
            document.getElementById("insta_sButton").style.display = "none";
        }
    }
    document.getElementById("insta_fButton").onclick = function () {
        a += +1068;
        var t_value = "translate3d(" + a +"px, 0px, 0px)";
        document.getElementsByClassName("m_s_3_list_swiper_wrap")[0].style.transform = t_value;

        document.getElementById("insta_sButton").style.display = "inline-block";
        if(a == 0) {
            document.getElementById("insta_fButton").style.display = "none";
        }
    }
    var b = 0;
    document.getElementById("m_s_1_list_button_right").onclick = function () {
        b += -1068;
        var t_value = "translate3d(" + b +"px, 0px, 0px)";
        document.getElementsByClassName("m_s_1_list_swiper_wrap")[0].style.transform = t_value;

        document.getElementById("m_s_1_list_button_left").style.display = "inline-block";
        if(b == -1068*2) {
            document.getElementById("m_s_1_list_button_right").style.display = "none";
        }
    }
    document.getElementById("m_s_1_list_button_left").onclick = function () {
        b += +1068;
        var t_value = "translate3d(" + b +"px, 0px, 0px)";
        document.getElementsByClassName("m_s_1_list_swiper_wrap")[0].style.transform = t_value;

        document.getElementById("m_s_1_list_button_right").style.display = "inline-block";
        if(b == 0) {
            document.getElementById("m_s_1_list_button_left").style.display = "none";
        }
    }
    var c = 0;
    document.getElementById("m_s_4_list_button_right").onclick = function () {
        c += -1068;
        var t_value = "translate3d(" + c +"px, 0px, 0px)";
        document.getElementsByClassName("m_s_4_list_swiper_wrap")[0].style.transform = t_value;

        document.getElementById("m_s_4_list_button_left").style.display = "inline-block";
        if(c == -1068*2) {
            document.getElementById("m_s_4_list_button_right").style.display = "none";
        }
    }
    document.getElementById("m_s_4_list_button_left").onclick = function () {
        c += +1068;
        var t_value = "translate3d(" + c +"px, 0px, 0px)";
        document.getElementsByClassName("m_s_4_list_swiper_wrap")[0].style.transform = t_value;

        document.getElementById("m_s_4_list_button_right").style.display = "inline-block";
        if(c == 0) {
            document.getElementById("m_s_4_list_button_left").style.display = "none";
        }
    }
    var d = 0;
    document.getElementById("m_s_5_list_button_right").onclick = function () {
        d += -1068;
        var t_value = "translate3d(" + d +"px, 0px, 0px)";
        document.getElementsByClassName("m_s_5_list_swiper_wrap")[0].style.transform = t_value;

        document.getElementById("m_s_5_list_button_left").style.display = "inline-block";
        if(d == -1068*2) {
            document.getElementById("m_s_5_list_button_right").style.display = "none";
        }
    }
    document.getElementById("m_s_5_list_button_left").onclick = function () {
        d += +1068;
        var t_value = "translate3d(" + d +"px, 0px, 0px)";
        document.getElementsByClassName("m_s_5_list_swiper_wrap")[0].style.transform = t_value;

        document.getElementById("m_s_5_list_button_right").style.display = "inline-block";
        if(d == 0) {
            document.getElementById("m_s_5_list_button_left").style.display = "none";
        }
    }
    var e = 0;
    document.getElementById("m_s_2_list_button_right").onclick = function () {
        e += -1098;
        var t_value = "translate3d(" + e +"px, 0px, 0px)";
        document.getElementsByClassName("m_s_2_list_swiper_wrap")[0].style.transform = t_value;

        document.getElementById("m_s_2_list_button_left").style.display = "inline-block";
        if(e == -1098) {
            document.getElementById("m_s_2_list_button_right").style.display = "none";
        }
    }
    document.getElementById("m_s_2_list_button_left").onclick = function () {
        e += +1098;
        var t_value = "translate3d(" + e +"px, 0px, 0px)";
        document.getElementsByClassName("m_s_2_list_swiper_wrap")[0].style.transform = t_value;

        document.getElementById("m_s_2_list_button_right").style.display = "inline-block";
        if(e == 0) {
            document.getElementById("m_s_2_list_button_left").style.display = "none";
        }
    }
}

// 메인 섹션 맨 상단의 이벤트 목록 케러셀
var cnt = 0;
$(function() {
    // 시간마다 자동 넘김.
    setInterval(function(){
        if(cnt != 3) {
            cnt++;
        }
        var w = window.innerWidth;
        var w_val = w + "px"; 
        var v = "translate3d("+(cnt*(-w))+"px, 0px, 0px)";
        $(".m_s_top_swiper").css("width",w_val);
        if(cnt == 0) {
            $(".m_s_top_swiper").css("transition-duration","0ms");
            $(".m_s_top_swiper").css("transform",v);
        } else {
            $(".m_s_top_swiper").css("transition-duration","300ms");
            $(".m_s_top_swiper").css("transform",v);
            if(cnt == 3) {
                var t = 1 + " / 3";
                cnt = -1;
            } else {
                var t = (cnt+1) + " / 3";
            }
        }
        $(".m_s_top_text").html(t);
    }, 4000);
    // 왼쪽 버튼 클릭 시 넘김
    $("#m_s_top_bLeft").click(function() {
        if(cnt == -1) {
            cnt = 0;
        }
        var w = window.innerWidth
        var w_val = w + "px"; 
        $(".m_s_top_swiper").css("width",w_val);
        if(cnt == 0) {
            cnt = 3;
            var v = "translate3d("+(cnt*(-w))+"px, 0px, 0px)";
            $(".m_s_top_swiper").css("transition-duration","0ms");
            $(".m_s_top_swiper").css("transform", v);
            cnt = 2;
        } else {
            cnt--;
        }
        setTimeout(function() {
        var v = "translate3d("+(cnt*(-w))+"px, 0px, 0px)";
            $(".m_s_top_swiper").css("transition-duration","300ms");
            $(".m_s_top_swiper").css("transform",v);
            if(cnt == 0) {
                var t = 1 + " / 3";
                cnt = 3;
                var v = "translate3d("+(cnt*(-w))+"px, 0px, 0px)";
                setTimeout(function() {
                    $(".m_s_top_swiper").css("transition-duration","0ms");
                    $(".m_s_top_swiper").css("transform", v);
                }, 300);
            } else {
                var t = (cnt+1) + " / 3";
            }
        $(".m_s_top_text").html(t);
        }, 100);
    });
    // 오른쪽 버튼 클릭 시 넘김
    $("#m_s_top_bRight").click(function() {
        if(cnt == -1) {
            cnt = 3;
        }
        var w = window.innerWidth
        var w_val = w + "px"; 
        $(".m_s_top_swiper").css("width",w_val);
        if(cnt == 3) {
            cnt = 1;
                $(".m_s_top_swiper").css("transition-duration","0ms");
                $(".m_s_top_swiper").css("transform", "translate3d(0px, 0px, 0px)");
        } else {
            cnt++;
        }
        setTimeout(function() {
        var v = "translate3d("+(cnt*(-w))+"px, 0px, 0px)";
            if(cnt == 3) {
                $(".m_s_top_swiper").css("transition-duration","300ms");
                $(".m_s_top_swiper").css("transform",v);
                var t = 1 + " / 3";
                cnt = 0;
                setTimeout(function() {
                    $(".m_s_top_swiper").css("transition-duration","0ms");
                    $(".m_s_top_swiper").css("transform", "translate3d(0px, 0px, 0px)");
                }, 300);
            } else {
                $(".m_s_top_swiper").css("transition-duration","300ms");
                $(".m_s_top_swiper").css("transform",v);
                var t = (cnt+1) + " / 3";
            }
        $(".m_s_top_text").html(t);
        }, 100);
    });
    // 버튼이 안보이다 호버 시 보이기
    $(".m_s_top_swiper > div > a > img").hover(function(){
        $("#m_s_top_bLeft").css("opacity","1");
        $("#m_s_top_bRight").css("opacity","1");
    }, function(){
        $("#m_s_top_bLeft").css("opacity","0");
        $("#m_s_top_bRight").css("opacity","0");
    });
    $(".m_s_top_swiper ~ button").hover(function(){
        $("#m_s_top_bLeft").css("opacity","1");
        $("#m_s_top_bRight").css("opacity","1");
    }, function(){
        $("#m_s_top_bLeft").css("opacity","0");
        $("#m_s_top_bRight").css("opacity","0");
    });

    //메인 섹션 ul select 시
    $('.m_s_4_ul_button').click(function() {
        $('.m_s_4_ul_button').css("color", "rgb(51, 51, 51)");
        $('.m_s_4_ul_button').css("backgroundColor", "rgb(247, 247, 247)");
        $(this).css("color", "rgb(255, 255, 255)");
        $(this).css("backgroundColor", "rgb(95, 0, 128)");
    });
});
// 화면 크기 바뀔때 인식
window.onresize = function(event) {
    var r_cnt = 0;
    var w = window.innerWidth
    var w_val = w + "px"; 
    var v = "translate3d("+(cnt*(-w))+"px, 0px, 0px)";
    $(".m_s_top_swiper").css("width",w_val);
    $(".m_s_top_swiper").css("transition-duration","0ms");
    $(".m_s_top_swiper").css("transform",v);                        
};