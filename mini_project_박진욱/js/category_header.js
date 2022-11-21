// category_header box 노드 영역 색 변경
// click 사용
console.log("확인하기");
$(function() {
    $('.cat_header_link').click(function() {
        $('.cat_header_link').css("color", "black");
        $(this).css("color", "rgb(95, 0, 128)");
        
    })

});


// test

// mouseover, mouseout 사용
// $(document).ready(function(){
//     $(".cat_header_link").mouseover(function(){
//         $(this).css("color", "rgb(95, 0, 128)");
//     })
//     $(".cat_header_link").mouseout(function(){
//         $('.cat_header_link').css("color", "black");
//     })
// });

// click, if 사용
// $(function() {
//     $('.cat_header_link').click(function() {
//         if($(this).css("color", "black")){
//             $(this).css("color", "rgb(95, 0, 128)");
//         } else {
//             $('.cat_header_link').css("color", "black");
//         }              
//     })
// });

