window.onresize = function() {
    var h_f_2 = document.getElementsByClassName('h_f_2')[0];
    
    if(document.body.scrollTop > 142 || document.documentElement.scrollTop > 142) {
        if(matchMedia("screen and (min-width: 1050px)").matches) {
            // .h_f_2 #search
            h_f_2.children[1].style.marginLeft = "120px";
            h_f_2.children[1].style.left = "50%";

            // h_f_2 #buttons
            h_f_2.children[2].style.marginLeft = "383px";
            h_f_2.children[2].style.left = "50%";
        } else {
            // .h_f_2 #search
            h_f_2.children[1].style.marginLeft = "-405px";
            h_f_2.children[1].style.left = "1050px";

            // h_f_2 #buttons
            h_f_2.children[2].style.marginLeft = "-142px";
            h_f_2.children[2].style.left = "1050px";
        }
    }
}
window.onscroll = function() {nav_fix()};
function nav_fix() {
    var h_s_1 = document.getElementsByClassName('h_s_1')[0];
    var h_f_2 = document.getElementsByClassName('h_f_2')[0];

    var s_category = document.getElementById('s_category');
    var s_list = document.getElementById('s_list');

    if(document.body.scrollTop > 142 || document.documentElement.scrollTop > 142) {
        document.getElementById('h_second').style.position = "fixed";
        document.getElementById('section').style.margin = "56px 0 0 0";
        document.getElementById('h_second').style.zIndex = "9994";
        // .h_s_1
        // 변경 속성
        h_s_1.style.justifyContent = "flex-start";
        // #s_category
        //추가 속성
        s_category.style.width = "150px";
        // #s_list
        // 변경 속성
        s_list.style.paddingLeft = "0";
        // #s_list > li
        // 변경 속성
        for(var i=0; i<s_list.children.length; i++) {
            s_list.children[i].style.width = "120px";
        }

        if(document.body.scrollTop > 142 || document.documentElement.scrollTop > 142) {
            if(matchMedia("screen and (min-width: 1050px)").matches) {
                // .h_f_2 #search
                h_f_2.children[1].style.marginLeft = "120px";
                h_f_2.children[1].style.left = "50%";
    
                // h_f_2 #buttons
                h_f_2.children[2].style.marginLeft = "383px";
                h_f_2.children[2].style.left = "50%";
            } else {
                // .h_f_2 #search
                h_f_2.children[1].style.marginLeft = "-405px";
                h_f_2.children[1].style.left = "1050px";
    
                // h_f_2 #buttons
                h_f_2.children[2].style.marginLeft = "-142px";
                h_f_2.children[2].style.left = "1050px";
            }
        }
        // .h_f_2 #search
        // 추가 속성
        h_f_2.children[1].style.zIndex = "9995";
        h_f_2.children[1].style.backgroundColor = "rgb(247, 247, 247)";
        h_f_2.children[1].style.alignItems = "center";

        // 변경 속성
        h_f_2.children[1].style.position = "fixed";
        h_f_2.children[1].style.top = "10px";
        h_f_2.children[1].style.width = "242px";
        h_f_2.children[1].style.height = "36px";
        h_f_2.children[1].style.border = "none";
        
        // .h_f_2 #search input
        // 추가 속성
        h_f_2.children[1].children[0].style.backgroundColor = "rgb(247, 247, 247)";
        h_f_2.children[1].children[0].style.paddingRight = "22px";
        h_f_2.children[1].children[0].style.lineHeight = "18px";
        h_f_2.children[1].children[0].style.letterSpacing = "-0.33px";

        // 변경 속성
        h_f_2.children[1].children[0].style.width = "193px";
        h_f_2.children[1].children[0].style.fontSize = "12px";
        
        // .h_f_2 #search button
        // 추가 속성
        h_f_2.children[1].children[1].style.position = "relative";
        h_f_2.children[1].children[1].style.height = "30px";
        h_f_2.children[1].children[1].style.margin = "10px -5px 10px 10px";
        h_f_2.children[1].children[1].style.top = "0px";
        h_f_2.children[1].children[1].style.width = "40px";
        h_f_2.children[1].children[1].style.padding = "0 10px 0 0";

        // .h_f_2 #search button img
        // 변경 속성
        h_f_2.children[1].children[1].children[0].src = "./images/mini_search_logo.svg";

        document.getElementById('s_link').style.display = "none";

        // h_f_2 #buttons
        // 추가 속성
        h_f_2.children[2].style.zIndex = "9995";
        // h_f_2.children[2].style.marginLeft = "383px";
        // h_f_2.children[2].style.left = "50%";
        h_f_2.children[2].style.removeProperty("right");

        // 변경 속성
        h_f_2.children[2].style.position = "fixed";
        h_f_2.children[2].style.top = "10px";
        h_f_2.children[2].style.right = "auto";
    } else {
        document.getElementById('h_second').style.position = "relative";
        document.getElementById('section').style.margin = "0";
        document.getElementById('h_second').style.zIndex = "";

        // .h_s_1
        // 변경 속성
        h_s_1.style.justifyContent = "space-between";

        // #s_category
        //추가 속성
        s_category.style.width = "";

        // #s_list
        // 변경 속성
        s_list.style.paddingLeft = "40px";

        // #s_list > li
        // 변경 속성
        for(var i=0; i<s_list.children.length; i++) {
            s_list.children[i].style.width = "150px";
        }

        // .h_f_2 #search
        // 추가 속성
        h_f_2.children[1].style.zIndex = "zndex";
        h_f_2.children[1].style.backgroundColor = "";
        h_f_2.children[1].style.alignItems = "";
        h_f_2.children[1].style.marginLeft = "";

        // 변경 속성
        h_f_2.children[1].style.position = "absolute";
        h_f_2.children[1].style.top = "8px";
        h_f_2.children[1].style.left = "325px";
        h_f_2.children[1].style.width = "400px";
        h_f_2.children[1].style.height = "48px";
        h_f_2.children[1].style.border = "1px solid rgb(95, 0, 128)";
        
        // .h_f_2 #search input
        // 추가 속성
        h_f_2.children[1].children[0].style.backgroundColor = "";
        h_f_2.children[1].children[0].style.paddingRight = "";
        h_f_2.children[1].children[0].style.lineHeight = "";
        h_f_2.children[1].children[0].style.letterSpacing = "";

        // 변경 속성
        h_f_2.children[1].children[0].style.width = "300px";
        h_f_2.children[1].children[0].style.fontSize = "16px";
        
        // .h_f_2 #search button
        // 추가 속성
        h_f_2.children[1].children[1].style.position = "";
        h_f_2.children[1].children[1].style.height = "";
        h_f_2.children[1].children[1].style.margin = "";
        h_f_2.children[1].children[1].style.top = "";
        h_f_2.children[1].children[1].style.width = "";
        h_f_2.children[1].children[1].style.padding = "";

        // .h_f_2 #search button img
        // 변경 속성
        h_f_2.children[1].children[1].children[0].src = "./images/search_logo.svg";
        document.getElementById('s_link').style.display = "flex";

        // h_f_2 #buttons
        // 추가 속성
        h_f_2.children[2].style.zIndex = "";
        h_f_2.children[2].style.marginLeft = "";
        h_f_2.children[2].style.left = "";
        h_f_2.children[2].style.right = "0";

        // 변경 속성
        h_f_2.children[2].style.position = "absolute";
        h_f_2.children[2].style.top = "14px";
        h_f_2.children[2].style.right = "0";
    }

    // section_right_nav 부분 코드
    for(var b = 100; b < window.innerHeight; b+=100) {
        if(document.documentElement.scrollTop > 198+b) {
            var c = document.documentElement.scrollTop - 198 + 514;
            var d = c+"px";
            document.getElementById('right_nav').style.top = d;
        }
    }
    if(document.documentElement.scrollTop <= 198) {
        document.getElementById('right_nav').style.top = "714px";
    }
    // section_scrollup 부분 코드
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById('scrollup').style.opacity = "1";
        if(window.innerHeight >= 1050) {
            document.getElementById('scrollup').style.bottom = "15px";
        } else {
            document.getElementById('scrollup').style.bottom = "65px";
        }
    } else {
        document.getElementById('scrollup').style.opacity = "0";
        document.getElementById('scrollup').style.bottom = "-46px";
    }
    
}