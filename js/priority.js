$(function () {
    $('.add-form').hide();
    loveClicked = true;
    paidClicked = true;
    needClicked = true;
    goodClicked = true;

    $(".add-button").click(function() {
        $(".add-form").show();
        $(".add-button").hide();
    })
    
    $("#love-button").click(function() {
        if (loveClicked) {
            $("#love-button").css("background-color", "#F45B69");
            loveClicked = false;
        } else {
            $("#love-button").css("background-color", "#5DC3C2");
            loveClicked = true;
        }
    })
    
    $("#paid-button").click(function() {
        if (paidClicked) {
            $("#paid-button").css("background-color", "#F45B69");
            paidClicked = false;
        } else {
            $("#paid-button").css("background-color", "#5DC3C2");
            paidClicked = true;
        }
    })
    
    $("#need-button").click(function() {
        if (needClicked) {
            $("#need-button").css("background-color", "#F45B69");
            needClicked = false;
        } else {
            $("#need-button").css("background-color", "#5DC3C2");
            needClicked = true;
        }
    })
    
    $("#good-button").click(function() {
        if (goodClicked) {
            $("#good-button").css("background-color", "#F45B69");
            goodClicked = false;
        } else {
            $("#good-button").css("background-color", "#5DC3C2");
            goodClicked = true;
        }
    })
    
    $(".discard-button").click(function() {
        $(".add-form").hide();
        $(".add-button").show();
    })
    
    $(".save-button").click(function() {
        $(".add-form").hide();
        $(".add-button").show();
    })
});

