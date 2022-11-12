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
}