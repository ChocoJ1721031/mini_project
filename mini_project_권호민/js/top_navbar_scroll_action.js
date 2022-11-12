
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
    // for(var b = 1; b < 20; b++) {
    //     if(document.documentElement.scrollTop > 198+(b*50)) {
    //         var c = document.documentElement.scrollTop - 198 + 714;
    //         var d = c+"px";
    //         document.getElementById('right_nav').style.top = d;
    //     }
    // }
    // if(document.documentElement.scrollTop <= 198) {
    //     document.getElementById('right_nav').style.top = "714px";
    // }
    for(var b = 80; b < window.innerHeight; b+=80) {
        if(document.documentElement.scrollTop > 198+b) {
            var c = document.documentElement.scrollTop - 198 + 714;
            var d = c+"px";
            document.getElementById('right_nav').style.top = d;
        }
    }
    if(document.documentElement.scrollTop <= 198) {
        document.getElementById('right_nav').style.top = "714px";
    }
    
}