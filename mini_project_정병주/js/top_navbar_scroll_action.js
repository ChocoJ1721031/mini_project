window.onscroll = function() {nav_fix()};
function nav_fix() {
    var h_f_2 = document.getElementsByClassName('h_f_2')[0];
    var search = document.getElementById('search');
    var buttons = document.getElementById('buttons');
    if(document.body.scrollTop > 142 || document.documentElement.scrollTop > 142) {
        document.getElementById('h_second').style.position = "fixed";
        document.getElementById('h_second').style.width = "100%";
        document.getElementById('section').style.margin = "56px 0 0 0";
        document.getElementById('h_second').style.zIndex = "1";
        
        h_f_2.children([1]).style.position = "fixed";
        h_f_2.children([1]).style.zIndex = "";
        h_f_2.children([1]).style.top = "10px";
        

    } else {
        document.getElementById('h_second').style.position = "relative";
        document.getElementById('section').style.margin = "0";
    }
}