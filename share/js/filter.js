// 초기화

// $(function(){ // 이거로 감싸주지 않으면 -> 스크립트 임포트 맨 아래 하거나 defer 붙여서 임포트

$("#filter_reset").click(function() {

    $(".check").find(".path1").attr("d","M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z");
    $(".check").find(".path1").attr("stroke","#ddd");
    $(".check").find(".path1").removeAttr("fill");
    $(".check").find(".path2").attr("stroke","#ddd");

    $(".radio").find(".path3").attr("d","M12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z");
    $(".radio").find(".path3").attr("fill","#fff");
    $(".radio").find(".path3").attr("stroke","#ddd");

    $(".contents_pricture1_div").show();

    // 상품목록 위에 선택한 옵션 표시 삭제
    $(".opt_selected_wrap").hide();

});

// });



// opt_selected_wrap 처음에 안보이게
$(document).ready(function(){
    $(".opt_selected_wrap").hide();
})
// opt_cancel X버튼 누르면 
// 필터의 체크상태 해제, opt_selected_wrap 숨김, 밑의 상품목록 원상복구
$(".opt_cancel").click(function(){

    $(".check").removeClass("checked");
    $(".check").find(".path1").attr("d","M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z");
    $(".check").find(".path1").attr("stroke","#ddd");
    $(".check").find(".path1").removeAttr("fill");
    $(".check").find(".path2").attr("stroke","#ddd");

    $(".radio").removeClass("checked");
    $(".radio").find(".path3").attr("d","M12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z");
    $(".radio").find(".path3").attr("fill","#fff");
    $(".radio").find(".path3").attr("stroke","#ddd");

    $(".opt_selected_wrap").hide();
    $(".contents_pricture1_div").show();
});




// .check 누르면 path 바꾸기

$(".check").click(function() {

    if($(this).hasClass("checked")) { // 체크되어있을때 클릭 -> 체크 해제

        $(this).removeClass("checked");
        $(this).find(".path1").attr("d","M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z");
        $(this).find(".path1").attr("stroke","#ddd");
        $(this).find(".path1").removeAttr("fill");
        $(this).find(".path2").attr("stroke","#ddd");

        // $(전체상품).show()
        $(".contents_pricture1_div").eq(0).show();
        // $(".contents_pictures2").hide();

        // 상품목록 위에 선택한 옵션 표시 삭제
        $(".opt_selected_wrap").hide();

        
    } else { // 체크안되어있을때 클릭 -> 체크 
        
        $(this).addClass("checked");
        $(this).find(".path1").attr("d","M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z");
        $(this).find(".path1").attr("fill","#5f0080");
        $(this).find(".path1").removeAttr("stroke");
        $(this).find(".path2").attr("stroke","#fff");

        // $(전체상품).not(가브로).hide()
        $(".contents_pricture1_div").eq(1).hide();
        $(".contents_pricture1_div").eq(2).hide();
        // $(".contents_pictures2").hide();

        // 상품목록 위에 선택한 옵션 표시 보이게
        $(".opt_selected_wrap").show();
    }
});

// 가격
// 체크 해제
// 체크 
$(".radio").click(function() {

    if($(this).hasClass("checked")) { // 체크되어있을때 클릭 -> 체크 해제

        $(this).removeClass("checked");
        $(this).find(".filter_radio_unchecked").show();
        $(this).find(".filter_radio_checked").hide();

        $(".contents_pricture1_div").show();

        // 상품목록 위에 선택한 옵션 표시 삭제
        $(".opt_selected_wrap").hide();

    } else { // 체크안되어있을때 클릭 -> 체크 
        
        $(this).addClass("checked");
        $(this).find(".filter_radio_checked").show();
        $(this).find(".filter_radio_unchecked").hide();

        $(".contents_pricture1_div").eq(1).hide();
        $(".contents_pricture1_div").eq(2).hide();

        // 상품목록 위에 선택한 옵션 표시 보이게
        $(".opt_selected_wrap").show();
    }
});
// filter_radio_checked 처음에 안보이게
$(document).ready(function(){
    $(".filter_radio_checked").hide();
});




// 브랜드/가격/혜택/유형 누르면 밑에 접히게
// svg => style transform: rotate(180deg);
// ul => style max-height: 0px; opacity: 0;

$("#btn_showHide1").click(function() {

    if($(this).hasClass("hide")) { // hide상태일때 -> show

        $(this).removeClass("hide");
        $(this).find("svg").attr("style","transform: rotate(0deg)");
        $(".filter_brand_list").attr("style","max-height: 100vh; opacity: 1");
        
    } else { // show상태일때 -> hide
        
        $(this).addClass("hide");
        $(this).find("svg").attr("style","transform: rotate(180deg)");
        $(".filter_brand_list").attr("style","max-height: 0px; opacity: 0");
    }
});
$("#btn_showHide2").click(function() {

    if($(this).hasClass("hide")) { // hide상태일때 -> show

        $(this).removeClass("hide");
        $(this).find("svg").attr("style","transform: rotate(0deg)");
        $(".filter_price_list").attr("style","max-height: 100vh; opacity: 1");
        
    } else { // show상태일때 -> hide
        
        $(this).addClass("hide");
        $(this).find("svg").attr("style","transform: rotate(180deg)");
        $(".filter_price_list").attr("style","max-height: 0px; opacity: 0");
    }
});
$("#btn_showHide3").click(function() {

    if($(this).hasClass("hide")) { // hide상태일때 -> show

        $(this).removeClass("hide");
        $(this).find("svg").attr("style","transform: rotate(0deg)");
        $(".filter_event_list").attr("style","max-height: 100vh; opacity: 1");
        
    } else { // show상태일때 -> hide
        
        $(this).addClass("hide");
        $(this).find("svg").attr("style","transform: rotate(180deg)");
        $(".filter_event_list").attr("style","max-height: 0px; opacity: 0");
    }
});
$("#btn_showHide4").click(function() {

    if($(this).hasClass("hide")) { // hide상태일때 -> show

        $(this).removeClass("hide");
        $(this).find("svg").attr("style","transform: rotate(0deg)");
        $(".filter_type_list").attr("style","max-height: 100vh; opacity: 1");
        
    } else { // show상태일때 -> hide
        
        $(this).addClass("hide");
        $(this).find("svg").attr("style","transform: rotate(180deg)");
        $(".filter_type_list").attr("style","max-height: 0px; opacity: 0");
    }
});




// 가나다순/상품많은순 클릭시 색깔 바뀌게 
// + 밑 list 상황에따라 보이게 안보이게

// order1 선택
$("#order1").click(function() {

    $(this).addClass("selected");
    $("#order2").removeClass("selected");
    $("#order1_list").show();
    $("#order2_list").hide();

});
// order2 선택
$("#order2").click(function() {
    
    $(this).addClass("selected");
    $("#order1").removeClass("selected");
    $("#order2_list").show();
    $("#order1_list").hide();
     
});

// order2_list 처음에 안보이게
$(document).ready(function(){
    $("#order2_list").hide();
})


