$(document).ready(function(){
    $(".contents_pictures2").hide();
});

$(document).ready(function(){
    $(".content_recommend").click(function(){
        $(".content_recommend").css("color", "rgb(51,51,51)");
        $(".content_new_product").css("color", "rgb(153,153,153)");
        $(".content_sales_rate").css("color", "rgb(153,153,153)");
        $(".content_benefit").css("color", "rgb(153,153,153)");
        $(".content_high_price").css("color", "rgb(153,153,153)");
        $(".content_low_price").css("color", "rgb(153,153,153)");

        $(".contents_pictures2").hide();
        $(".contents_pictures1").show();


    })
})
$(document).ready(function(){
    $(".content_new_product").click(function(){
        $(".content_recommend").css("color", "rgb(153,153,153)");
        $(".content_new_product").css("color", "rgb(51,51,51)");
        $(".content_sales_rate").css("color", "rgb(153,153,153)");
        $(".content_benefit").css("color", "rgb(153,153,153)");
        $(".content_high_price").css("color", "rgb(153,153,153)");
        $(".content_low_price").css("color", "rgb(153,153,153)");

        $(".contents_pictures2").show();
        $(".contents_pictures1").hide();
        
    })
})
$(document).ready(function(){
    $(".content_sales_rate").click(function(){
        $(".content_recommend").css("color", "rgb(153,153,153)");
        $(".content_new_product").css("color", "rgb(153,153,153)");
        $(".content_sales_rate").css("color", "rgb(51,51,51)");
        $(".content_benefit").css("color", "rgb(153,153,153)");
        $(".content_high_price").css("color", "rgb(153,153,153)");
        $(".content_low_price").css("color", "rgb(153,153,153)");

        $(".contents_pictures2").hide();
        $(".contents_pictures1").show();
    })
})
$(document).ready(function(){
    $(".content_benefit").click(function(){
        $(".content_recommend").css("color", "rgb(153,153,153)");
        $(".content_new_product").css("color", "rgb(153,153,153)");
        $(".content_sales_rate").css("color", "rgb(153,153,153)");
        $(".content_benefit").css("color", "rgb(51,51,51)");
        $(".content_high_price").css("color", "rgb(153,153,153)");
        $(".content_low_price").css("color", "rgb(153,153,153)");

        $(".contents_pictures2").show();
        $(".contents_pictures1").hide();
    })
})
$(document).ready(function(){
    $(".content_high_price").click(function(){
        $(".content_recommend").css("color", "rgb(153,153,153)");
        $(".content_new_product").css("color", "rgb(153,153,153)");
        $(".content_sales_rate").css("color", "rgb(153,153,153)");
        $(".content_benefit").css("color", "rgb(153,153,153)");
        $(".content_high_price").css("color", "rgb(51,51,51)");
        $(".content_low_price").css("color", "rgb(153,153,153)");

        $(".contents_pictures2").hide();
        $(".contents_pictures1").show();
    })
})
$(document).ready(function(){
    $(".content_low_price").click(function(){
        $(".content_recommend").css("color", "rgb(153,153,153)");
        $(".content_new_product").css("color", "rgb(153,153,153)");
        $(".content_sales_rate").css("color", "rgb(153,153,153)");
        $(".content_benefit").css("color", "rgb(153,153,153)");
        $(".content_high_price").css("color", "rgb(153,153,153)");
        $(".content_low_price").css("color", "rgb(51,51,51)");

        $(".contents_pictures1").hide();
        $(".contents_pictures2").show();
    })
})
