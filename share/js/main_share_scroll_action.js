
window.onscroll = function() {nav_fix()};
function nav_fix() {
    if(document.body.scrollTop > 142 || document.documentElement.scrollTop > 142) {
        document.getElementById('h_second').style.position = "fixed";
        // document.getElementById('h_second').style.width = "100%";
        document.getElementById('section').style.margin = "56px 0 0 0";
    } else {
        document.getElementById('h_second').style.position = "relative";
        document.getElementById('section').style.margin = "0";
    }

    // section_right_nav 부분 코드
    for(var b = 100; b < window.innerHeight; b+=100) {
        if(document.documentElement.scrollTop > 198+b) {
            var c = document.documentElement.scrollTop - 198 + 514;
            var d = c+"px";
            document.getElementById('right_nav').style.top = d;
        }
    }
    if(document.documentElement.scrollTop <= 198) {
        document.getElementById('right_nav').style.top = "714px";
    }
    // section_scrollup 부분 코드
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById('scrollup').style.opacity = "1";
        if(window.innerHeight >= 1050) {
            document.getElementById('scrollup').style.bottom = "15px";
        } else {
            document.getElementById('scrollup').style.bottom = "65px";
        }
    } else {
        document.getElementById('scrollup').style.opacity = "0";
        document.getElementById('scrollup').style.bottom = "-46px";
    }
    
}