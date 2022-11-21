var regExp1 = /[~!\@\#$%^&*\()\-=+_'\;<>\/.\`:\"\\,\[\]?|{}]/gi;

function id_script(el, minlength, maxlength) {
    el.value = el.value.replace(regExp1, '').replace(regExp1, '$1');
    if(el.value.length > maxlength || el.value.length < minlength) {
        document.getElementById('input_id_p').innerHTML = "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합";
        document.getElementById('input_id_p').style.display = "flex";
    } else {
        document.getElementById('input_id_p').innerHTML = "";
        document.getElementById('input_id_p').style.display = "none";
    }
    document.getElementsByClassName('info_check_button')[0].style.borderColor = "rgb(95, 0, 128)";
    document.getElementsByClassName('info_check_button')[0].style.color = "rgb(95, 0, 128)";
    document.getElementsByClassName('info_check_button')[0].style.cursor = "pointer";
    
}

var regExp2 = /[\s]/gi;
function input_pw_script(el, minlength) {
    if(el.value.length < 10 && el.value.length > 0) {
        document.getElementById('input_pw_p').innerHTML = "최소 10자 이상 입력";
        document.getElementById('input_pw_p').style.display = "flex";
    } else if(el.value.length >= 10 && (!regExp2.test(el.value) || (/[a-zA-Z]/gi.test(el.value) && /[0-9]/gi.test(el.value)) || (/[a-zA-Z]/gi.test(el.value) && regExp1.test(el.value))|| (regExp1.test(el.value) && /[0-9]/gi.test(el.value)))) {
        document.getElementById('input_pw_p').innerHTML = "";
        document.getElementById('input_pw_p').style.display = "none";
    } else {
        document.getElementById('input_pw_p').innerHTML = "영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합";
        document.getElementById('input_pw_p').style.display = "flex";
    }
}

function input_pw_check_script(el) {
    if(el.value == "") {
        document.getElementById('input_pw_check_p').innerHTML = "비밀번호를 한번 더 입력해 주세요.";
        document.getElementById('inpinput_pw_check_p').style.display = "flex";
        
    } else if(el.value != document.getElementById('input_pw').value) {
        document.getElementById('input_pw_check_p').innerHTML = "동일한 비밀번호를 입력";
        document.getElementById('input_pw_check_p').style.display = "flex";
    } else {
        document.getElementById('input_pw_check_p').innerHTML = "";
        document.getElementById('input_pw_check_p').style.display = "none";
    }
}

function input_user_name_script(el) {
    if(el.value == "") {
        document.getElementById('input_user_name_p').innerHTML = "이름을 입력해 주세요.";
        document.getElementById('input_user_name_p').style.display = "flex";
    } else {
        document.getElementById('input_user_name_p').innerHTML = "";
        document.getElementById('input_user_name_p').style.display = "none";
    }
}

var regExp3 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]/gi;
function input_mail_script(el) {
    document.getElementsByClassName('info_check_button')[1].style.borderColor = "rgb(95, 0, 128)";
    document.getElementsByClassName('info_check_button')[1].style.color = "rgb(95, 0, 128)";
    document.getElementsByClassName('info_check_button')[1].style.cursor = "pointer";

    if(el.value == "") {
        document.getElementById('input_mail_p').innerHTML = "이메일을 입력해 주세요.";
        document.getElementById('input_mail_p').style.display = "flex";
    } else if(!(regExp3.test(el.value))) {
        document.getElementById('input_mail_p').innerHTML = "이메일 형식으로 입력해 주세요.";
        document.getElementById('input_mail_p').style.display = "flex";
    } else {
        console.log(!(regExp3.test(el.value)));
        document.getElementById('input_mail_p').innerHTML = "";
        document.getElementById('input_mail_p').style.display = "none";
    }
}

var regExp4 = /[a-zA-Zㄱ-ㅎ가-힣]/gi
function input_phone_script(el) {
    el.value = el.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    if(el.value == "") {
        document.getElementById('input_phone_p').innerHTML = "휴대폰 번호를 입력해 주세요.";
        document.getElementById('input_phone_p').style.display = "flex";
        document.getElementById('phone_check_btn').disabled = true;
        document.getElementById('phone_check_btn').style.cursor = "default";
    } else {
        document.getElementById('input_phone_p').innerHTML = "";
        document.getElementById('input_phone_p').style.display = "none";
        document.getElementById('phone_check_btn').disabled = false;
        document.getElementById('phone_check_btn').style.cursor = "pointer";
    }
}

let today = new Date();
var fullYear = today.getFullYear();
function input_birth_script() {
    document.getElementById('input_birth_year').value
    = document.getElementById('input_birth_year').value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    document.getElementById('input_birth_month').value
    = document.getElementById('input_birth_month').value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    document.getElementById('input_birth_date').value
    = document.getElementById('input_birth_date').value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    if(document.getElementById('input_birth_year').value.length < 4) {
        document.getElementById('input_birth_p').innerHTML = "생년월일을 다시 확인해 주세요.";
        document.getElementById('input_birth_p').style.display = "flex";
    } else if(document.getElementById('input_birth_year').value == "" || fullYear - document.getElementById('input_birth_year').value > 100) {
        document.getElementById('input_birth_p').innerHTML = "태어난 년도 4자리를 정확하게 입력해주세요.";
        document.getElementById('input_birth_p').style.display = "flex";
    } else if(document.getElementById('input_birth_month').value == "" || document.getElementById('input_birth_month').value > 12 || document.getElementById('input_birth_month').value == 0) {
        document.getElementById('input_birth_p').innerHTML = "태어난 월을 정확하게 입력해주세요.";
        document.getElementById('input_birth_p').style.display = "flex";
    } else if(document.getElementById('input_birth_date').value == "" || document.getElementById('input_birth_date').value > 31 || document.getElementById('input_birth_date').value == 0) {
        document.getElementById('input_birth_p').innerHTML = "태어난 일을 정확하게 입력해주세요.";
        document.getElementById('input_birth_p').style.display = "flex";
    } else {
        document.getElementById('input_birth_p').innerHTML = "";
        document.getElementById('input_birth_p').style.display = "none";
    }
}

function agree_all() {
    if(document.getElementById('agree_all').checked == true) {
        for(var i=0; i<document.getElementsByClassName('agree_check').length; i++) {
            document.getElementsByClassName('agree_check')[i].checked= true;
        }
    } else if(document.getElementById('agree_all').checked == false) {
        for(var i=0; i<document.getElementsByClassName('agree_check').length; i++) {
            document.getElementsByClassName('agree_check')[i].checked= false;
        }
    }
}

function sms_all() {
    if(document.getElementById('sms_all').checked == true) {
        for(var i=0; i<document.getElementsByClassName('sms_each').length; i++) {
            document.getElementsByClassName('sms_each')[i].checked= true;
        }
    } else if(document.getElementById('sms_all').checked == false) {
        for(var i=0; i<document.getElementsByClassName('sms_each').length; i++) {
            document.getElementsByClassName('sms_each')[i].checked= false;
        }
    }
}

$(document).ready(function() {
    $('input[type="checkbox"][class="agree_check"]').change(function() {
        if($('input[type="checkbox"][class="agree_check"]:checked').length < $('input[type="checkbox"][class="agree_check"]').length) {
            document.getElementById('agree_all').checked = false;
        } else {
            document.getElementById('agree_all').checked = true;
        }
    });
});

$(document).ready(function() {
    $('input[type="checkbox"][class*="sms_each"]').change(function() {
        if($('input[type="checkbox"][class*="sms_each"]:checked').length < $('input[type="checkbox"][class*="sms_each"]').length) {
            document.getElementById('sms_all').checked = false;
        } else {
            document.getElementById('sms_all').checked = true;
        }
    });
});
function event_pop_up_1() {
    document.getElementById('input_event_area_1').style.display = "flex";
    document.getElementById('input_event_area_1').style.flexDirection = "column";
    document.getElementById('input_event_area_2').style.display = "none";
}
function event_pop_up_2() {
    document.getElementById('input_event_area_1').style.display = "none";
    document.getElementById('input_event_area_2').style.display = "flex";
    document.getElementById('input_event_area_2').style.flexDirection = "column";
}


function open_pop_up_1() {
    if(document.getElementById('input_id').value.length >= 6) {
        document.getElementById('pop_up_1_content_text').innerText = "사용 할 수 있는 아이디입니다.";
        document.getElementsByClassName('info_check_button')[0].style.borderColor = "rgb(221, 221, 221)";
        document.getElementsByClassName('info_check_button')[0].style.color = "rgb(221, 221, 221)";
        document.getElementsByClassName('info_check_button')[0].style.cursor = "default";
    } else {
        document.getElementById('pop_up_1_content_text').innerText = "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합";
        document.getElementsByClassName('info_check_button')[0].style.borderColor = "rgb(95, 0, 128)";
        document.getElementsByClassName('info_check_button')[0].style.color = "rgb(95, 0, 128)";
        document.getElementsByClassName('info_check_button')[0].style.cursor = "pointer";
    };
    document.getElementById('pop_up_1').style.display = "flex";
    document.body.style.overflow = "hidden";
}
function close_pop_up_1() {
    document.getElementById('pop_up_1').style.display = "none";
    document.body.style.overflow = "visible";
}
function open_pop_up_2() {
    if(regExp3.test(document.getElementById('input_mail').value)) {
        document.getElementById('pop_up_2_content_text').innerText = "사용 가능한 이메일 입니다.";
        document.getElementsByClassName('info_check_button')[1].style.borderColor = "rgb(221, 221, 221)";
        document.getElementsByClassName('info_check_button')[1].style.color = "rgb(221, 221, 221)";
        document.getElementsByClassName('info_check_button')[1].style.cursor = "default";
    } else {
        document.getElementById('pop_up_1_content_text').innerText = "이메일을 입력해 주세요.";
        document.getElementsByClassName('info_check_button')[1].style.borderColor = "rgb(95, 0, 128)";
        document.getElementsByClassName('info_check_button')[1].style.color = "rgb(95, 0, 128)";
        document.getElementsByClassName('info_check_button')[1].style.cursor = "pointer";
    };
    document.getElementById('pop_up_2').style.display = "flex";
    document.body.style.overflow = "hidden";
}
function close_pop_up_2() {
    document.getElementById('pop_up_2').style.display = "none";
    document.body.style.overflow = "visible";
}
function open_pop_up_3() {
    document.getElementById('pop_up_3').style.display = "flex";
    document.body.style.overflow = "hidden";
}
function close_pop_up_3() {
    document.getElementById('pop_up_3').style.display = "none";
    document.body.style.overflow = "visible";
}
function open_pop_up_4() {
    document.getElementById('pop_up_4').style.display = "flex";
    document.body.style.overflow = "hidden";
}
function close_pop_up_4() {
    document.getElementById('pop_up_4').style.display = "none";
    document.body.style.overflow = "visible";
}
function open_pop_up_5() {
    document.getElementById('pop_up_5').style.display = "flex";
    document.body.style.overflow = "hidden";
}
function close_pop_up_5() {
    document.getElementById('pop_up_5').style.display = "none";
    document.body.style.overflow = "visible";
}