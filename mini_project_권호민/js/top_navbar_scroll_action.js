window.onscroll = function() {nav_fix()};
function nav_fix() {
    if(document.body.scrollTop > 142 || document.documentElement.scrollTop > 142) {
        document.getElementById('h_second').style.position = "fixed";
        document.getElementById('h_second').style.width = "100%";
        document.getElementById('section').style.margin = "56px 0 0 0";
    } else {
        document.getElementById('h_second').style.position = "relative";
        document.getElementById('section').style.margin = "0";
    }
}