$(document).ready(function() {
    $(".quick-view-button").click(function() {
        var productId = $(this).siblings(".ga-product-list").val();
        var data = new FormData();
        data.append('action', 'interview_ajax_question');
        data.append('productId', productId);

        $.ajax({
            type: "POST",
            url: "https://www.yourprint.in/new-admin-ajax.php",
            data: data,
            processData: false,
            contentType: false,
            success: function(response) {
                var productData = JSON.parse(response);
                $(".popup-image").attr("src", productData.image);
                $(".popup-title").text(productData.title);
                $(".popup-price").text(productData.price);
                $(".quick-view-popup").fadeIn();
            }
        });
    });

    $(".add-to-cart-button").click(function() {
        var productTitle = $(".popup-title").text();
        alert("Successfully added " + productTitle + " to cart");
        $(".quick-view-popup").fadeOut();
    });
});