function select_all_1() {
    if(document.getElementsByClassName('select_all')[0].checked == true) {
        document.getElementsByClassName('select_all_text')[0].innerText = "전체선택("+document.getElementsByClassName('select_product').length +"/2)";
        document.getElementsByClassName('select_all_text')[1].innerText = "전체선택("+document.getElementsByClassName('select_product').length +"/2)";
        for(var i=0; i<document.getElementsByClassName('select_product').length; i++) {
            document.getElementsByClassName('select_product')[i].checked= true;
        }
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= true;
        }
    } else if(document.getElementsByClassName('select_all')[0].checked == false) {
        document.getElementsByClassName('select_all_text')[0].innerText = "전체선택(0/2)";
        document.getElementsByClassName('select_all_text')[1].innerText = "전체선택(0/2)";
        for(var i=0; i<document.getElementsByClassName('select_product').length; i++) {
            document.getElementsByClassName('select_product')[i].checked= false;
        }
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= false;
        }
    }
    

}
function select_all_2() {
    if(document.getElementsByClassName('select_all')[1].checked == true) {
        document.getElementsByClassName('select_all_text')[0].innerText = "전체선택("+document.getElementsByClassName('select_product').length +"/2)";
        document.getElementsByClassName('select_all_text')[1].innerText = "전체선택("+document.getElementsByClassName('select_product').length +"/2)";
        for(var i=0; i<document.getElementsByClassName('select_product').length; i++) {
            document.getElementsByClassName('select_product')[i].checked= true;
        }
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= true;
        }
    } else if(document.getElementsByClassName('select_all')[1].checked == false) {
        document.getElementsByClassName('select_all_text')[0].innerText = "전체선택(0/2)";
        document.getElementsByClassName('select_all_text')[1].innerText = "전체선택(0/2)";
        for(var i=0; i<document.getElementsByClassName('select_product').length; i++) {
            document.getElementsByClassName('select_product')[i].checked= false;
        }
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= false;
        }
    }
}

function select_product() {
    if(document.getElementsByClassName('select_product')[0].checked == true && document.getElementsByClassName('select_product')[1].checked == true) {
        document.getElementsByClassName('select_all_text')[0].innerText = "전체선택("+2 +"/2)";
        document.getElementsByClassName('select_all_text')[1].innerText = "전체선택("+2 +"/2)";
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= true;
        }
    } else if(document.getElementsByClassName('select_product')[0].checked == true && document.getElementsByClassName('select_product')[1].checked == false) {
        document.getElementsByClassName('select_all_text')[0].innerText = "전체선택("+1 +"/2)";
        document.getElementsByClassName('select_all_text')[1].innerText = "전체선택("+1 +"/2)";
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= false;
        }
    } else if(document.getElementsByClassName('select_product')[0].checked == false && document.getElementsByClassName('select_product')[1].checked == true) {
        document.getElementsByClassName('select_all_text')[0].innerText = "전체선택("+1 +"/2)";
        document.getElementsByClassName('select_all_text')[1].innerText = "전체선택("+1 +"/2)";
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= false;
        }
    } else if(document.getElementsByClassName('select_product')[0].checked == false || document.getElementsByClassName('select_product')[1].checked == false) {
        document.getElementsByClassName('select_all_text')[0].innerText = "전체선택("+0 +"/2)";
        document.getElementsByClassName('select_all_text')[1].innerText = "전체선택("+0 +"/2)";
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= false;
        }
    }
}

function show_hide_1() {
    if(document.getElementById('product_1_show_hide').style.rotate == "") {
        document.getElementById('product_1_show_hide').style.rotate = "180deg";
        document.getElementById('product_1_info_2').style.display = "none";
    } else {
        document.getElementById('product_1_show_hide').style.rotate = "";
        document.getElementById('product_1_info_2').style.display = "";
    }
    
}

function show_hide_2() {
    if(document.getElementById('product_2_show_hide').style.rotate == "") {
        document.getElementById('product_2_show_hide').style.rotate = "180deg";
        document.getElementById('product_2_info_2').style.display = "none";
    } else {
        document.getElementById('product_2_show_hide').style.rotate = "";
        document.getElementById('product_2_info_2').style.display = "";
    }
    
}

var i = 1;
var j = 1;

function total_cost() {
    document.getElementById('total_cost').textContent = (i*58000+j*9900) + "원";
    document.getElementById('final_cost').textContent = (i*58000+j*9900) - 2500 + "원";
}

function click_1() {
    if(document.getElementById('count_1').textContent == 1) {
        document.getElementById('click_1').style.backgroundImage = "url('./images/minus_gray.svg')";
    } else if(document.getElementById('count_1').textContent == 2) {
        i--
        document.getElementById('count_1').innerHTML = document.getElementById('count_1').textContent = i;
        document.getElementById('click_1').style.backgroundImage = "url('./images/minus_gray.svg')";

        total_cost();
    } else {
        i--
        document.getElementById('count_1').textContent = i;

        total_cost();
    }
}
function click_2() {
    i++
    document.getElementById('click_1').style.backgroundImage = "url('./images/minus_black.svg')";
    document.getElementById('count_1').textContent = i;
    
    total_cost();
}
function click_3() {
    if(document.getElementById('count_2').textContent == 1) {
        document.getElementById('click_3').style.backgroundImage = "url('./images/minus_gray.svg')";
    } else if(document.getElementById('count_2').textContent == 2) {
        j--
        document.getElementById('count_2').textContent = j;
        document.getElementById('click_3').style.backgroundImage = "url('./images/minus_gray.svg')";

        total_cost();
    } else {
        j--
        document.getElementById('count_2').textContent = j;

        total_cost();
    }
}
function click_4() {
    j++
    document.getElementById('click_3').style.backgroundImage = "url('./images/minus_black.svg')";
    document.getElementById('count_2').textContent = j;

    total_cost();
}

window.onload = function() {
    total_cost();
}


















