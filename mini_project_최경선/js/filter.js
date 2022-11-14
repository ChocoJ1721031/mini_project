// a 누르면 path 바꾸기

// $(function(){ // 이거로 감싸주지 않으면 -> 스크립트 임포트 맨 아래 하거나 defer 붙여서 임포트

$(".check").click(function() {

    if($(this).hasClass("checked")) { // 체크되어있을때 클릭 -> 체크 해제

        $(this).removeClass("checked");
        $(this).find(".path1").attr("d","M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z");
        $(this).find(".path1").attr("stroke","#ddd");
        $(this).find(".path1").removeAttr("fill");
        $(this).find(".path2").attr("stroke","#ddd");
        
    } else { // 체크안되어있을때 클릭 -> 체크 
        
        $(this).addClass("checked");
        $(this).find(".path1").attr("d","M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z");
        $(this).find(".path1").attr("fill","#5f0080");
        $(this).find(".path1").removeAttr("stroke");
        $(this).find(".path2").attr("stroke","#fff");
    }

    
});

//});

