window.onload = function() {
    document.getElementById("goods-add-product-move-right").onclick = function () {
        $(".goods-add-product-item-slide-item:first-child").insertAfter(".goods-add-product-item-slide-item:last-child");
        $(".goods-add-product-item-slide-item:first-child").insertAfter(".goods-add-product-item-slide-item:last-child");
        $(".goods-add-product-item-slide-item:first-child").insertAfter(".goods-add-product-item-slide-item:last-child");
        $(".goods-add-product-item-slide-item:first-child").insertAfter(".goods-add-product-item-slide-item:last-child");
        $(".goods-add-product-item-slide-item:first-child").insertAfter(".goods-add-product-item-slide-item:last-child");
    }
    document.getElementById("goods-add-product-move-left").onclick = function () {
        $(".goods-add-product-item-slide-item:last-child").insertBefore(".goods-add-product-item-slide-item:first-child");
        $(".goods-add-product-item-slide-item:last-child").insertBefore(".goods-add-product-item-slide-item:first-child");
        $(".goods-add-product-item-slide-item:last-child").insertBefore(".goods-add-product-item-slide-item:first-child");
        $(".goods-add-product-item-slide-item:last-child").insertBefore(".goods-add-product-item-slide-item:first-child");
        $(".goods-add-product-item-slide-item:last-child").insertBefore(".goods-add-product-item-slide-item:first-child");
    }
}