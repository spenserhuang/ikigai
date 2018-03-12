$(function () {
    $('.setting-items').hide();
    $('.more-items').hide();

    $(".settings-button").click(function() {
        $(".more-bar").hide();
        $(".setting-items").show();
    })
    
    $(".setting").click(function() {
        $(".setting-items").hide();
        $(".more-bar").show();
    })
    
    $(".more-button").click(function() {
        $(".more-bar").hide();
        $(".more-items").show();
    })
    
    $(".more").click(function() {
        $(".more-items").hide();
        $(".more-bar").show();
    })
});

