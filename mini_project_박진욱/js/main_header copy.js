$(function() {
    $('.s_click').click(function() {
        $('.s_click').css("color", "black");
        $(this).css("color", "rgb(95, 0, 128)");
    })
});

// window.onload = function () {
//     for(var i = 0; i < 4; i++) {
//         var id = "s_click"+i;
//         var f = "c" + i;
//         var f_name = f + "();"
//         document.getElementById(id).setAttribute("onclick",f_name);
//     }
// }

// function c0() {
//     for(var cnt = 0; cnt < 4; cnt++) {
//         var id = "s_click"+cnt;
//         if(cnt == 0) {
//             document.getElementById(id).style.color = "rgb(95, 0, 128)";
//         } else {
//             document.getElementById(id).style.color = "black";
//         }
//     }
// }
// function c1() {
//     for(var cnt = 0; cnt < 4; cnt++) {
//         var id = "s_click"+cnt;
//         if(cnt == 1) {
//             document.getElementById(id).style.color = "rgb(95, 0, 128)";
//         } else {
//             document.getElementById(id).style.color = "black";
//         }
//     }
// }
// function c2() {
//     for(var cnt = 0; cnt < 4; cnt++) {
//         var id = "s_click"+cnt;
//         if(cnt == 2) {
//             document.getElementById(id).style.color = "rgb(95, 0, 128)";
//         } else {
//             document.getElementById(id).style.color = "black";
//         }
//     }
// }
// function c3() {
//     for(var cnt = 0; cnt < 4; cnt++) {
//         var id = "s_click"+cnt;
//         if(cnt == 3) {
//             document.getElementById(id).style.color = "rgb(95, 0, 128)";
//         } else {
//             document.getElementById(id).style.color = "black";
//         }
//     }
// }

