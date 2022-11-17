// 닫기버튼 누르면 하단 안보이게 / 자세히보기버튼 누르면 하단 보이게

// $("#btn_close_1").click(function(){

//     if($("#btn_close_1").hasClass("hide")) {
//         $("#btn_close_1").removeClass("hide");
//         $(".exch_refund_wrap").hide();
//     } else {
//         $("#btn_close_1").addClass("hide");
//         $(".exch_refund_wrap").show();
//     }
// });

function toggle_1() {

    var x = document.getElementById("exch_refund_wrap");
    var btn = document.getElementById("btn_close_1")

    if(x.style.display === "none") {
        x.style.display = "block";
        // 닫기 + 화살표 위
        btn.innerText = '닫기';
        btn.className = "show"        
    }
    else {
        x.style.display = "none";
        // 자세히보기 + 화살표 아래
        btn.innerText = '자세히 보기';
        btn.className = "hide"
    }
}
function toggle_2() {

    var x = document.getElementById("cancel_wrap");
    var btn = document.getElementById("btn_close_2")

    if(x.style.display === "none") {
        x.style.display = "block";
        // 닫기 + 화살표 위
        btn.innerText = '닫기';
        btn.className = "show"        
    }
    else {
        x.style.display = "none";
        // 자세히보기 + 화살표 아래
        btn.innerText = '자세히 보기';
        btn.className = "hide"
    }
}