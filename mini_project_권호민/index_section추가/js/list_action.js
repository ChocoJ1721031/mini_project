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
$(function() {
    var cnt = 1;
    var timer = setInterval(function(){
                    var v = "translate3d("+(cnt*(20-window.innerWidth))+"px, 0px, 0px)";
                    $(".m_s_top_swiper").css("transform",v);
                    if(cnt == 3) {
                        cnt = 0;
                        // setTimeout(timer);
                    } else {
                        cnt++;
                    }
                }, 4000);
});