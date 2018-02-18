var ikigai_love = 0;
var ikigai_good = 0;
var ikigai_need = 0;
var ikigai_paid = 0;
var wholeday = 0;
$("#ikigai-love").click(function (e) {
    if (ikigai_love == 0) {
        ikigai_love = 1;
        $("#ikigai-love").css("background", "yellow");
    }
    else {
        ikigai_love = 0;
        $("#ikigai-love").css("background", "white");
    }
});
$("#ikigai-good").click(function (e) {
    if (ikigai_good == 0) {
        ikigai_good = 1;
        $("#ikigai-good").css("background", "#34fa50");
    }
    else {
        ikigai_good = 0;
        $("#ikigai-good").css("background", "white");
    }
});
$("#ikigai-need").click(function (e) {
    if (ikigai_need == 0) {
        ikigai_need = 1;
        $("#ikigai-need").css("background", "pink");
    }
    else {
        ikigai_need = 0;
        $("#ikigai-need").css("background", "white");
    }
});
$("#ikigai-paid").click(function (e) {
    if (ikigai_paid == 0) {
        ikigai_paid = 1;
        $("#ikigai-paid").css("background", "#0092ff");
    }
    else {
        ikigai_paid = 0;
        $("#ikigai-paid").css("background", "white");
    }
});
$("#wholeday").click(function (e) {
    if (wholeday == 0) {
        wholeday = 1;
        $("#from-time").fadeOut();
        $("#to-time").fadeOut();
    }
    else {
        wholeday = 0;
        $("#from-time").fadeIn();
        $("#to-time").fadeIn();
    }
});
$("#navigator-save").click(function (e) {
    alert("Task \"" + $("#title").val() + "\" has been created!");
});