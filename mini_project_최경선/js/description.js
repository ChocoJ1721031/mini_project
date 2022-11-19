// 상품설명/상세정보/후기/문의 탭 누를시 색 변경

$(".prod_tab").click(function(){

    // 다른 prod_tab에서 selected 삭제
    $(".prod_tab").not($(this)).removeClass("selected");

    // 클릭한 prod_tab에서 selected 추가
    $(this).addClass("selected");
    
});