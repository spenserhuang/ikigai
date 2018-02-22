$(function () {
    var paid = (sessionStorage.hasOwnProperty("paid") ? sessionStorage.getItem("paid") : "nothing").split(",");
    var good = (sessionStorage.hasOwnProperty("paid") ? sessionStorage.getItem("paid") : "nothing").split(",");
    var need = (sessionStorage.hasOwnProperty("paid") ? sessionStorage.getItem("paid") : "nothing").split(",");
    var love = (sessionStorage.hasOwnProperty("paid") ? sessionStorage.getItem("paid") : "nothing").split(",");
    $("#paid")[0].innerHTML = paid[0];
    $("#good")[0].innerHTML = good[0];
    $("#need")[0].innerHTML = need[0];
    $("#love")[0].innerHTML = love[0];

    $("#paid_info").css("display", "block");
    $("#good_info").css("display", "none");
    $("#need_info").css("display", "none");
    $("#love_info").css("display", "none");
    $("#paid_info")[0].innerHTML = "Paid for: " + paid;

    $("#paid").mousemove(function (e) {
        $("#paid_info").css("display", "block");
        $("#good_info").css("display", "none");
        $("#need_info").css("display", "none");
        $("#love_info").css("display", "none");
        $("#paid_info")[0].innerHTML = "Paid for: " + paid;
    });

    $("#good").mousemove(function (e) {
        $("#paid_info").css("display", "none");
        $("#good_info").css("display", "block");
        $("#need_info").css("display", "none");
        $("#love_info").css("display", "none");
        $("#good_info")[0].innerHTML = "Good at: " + good;
    });

    $("#need").mousemove(function (e) {
        $("#paid_info").css("display", "none");
        $("#good_info").css("display", "none");
        $("#need_info").css("display", "block");
        $("#love_info").css("display", "none");
        $("#need_info")[0].innerHTML = "World need: " + need;
    });

    $("#love").mousemove(function (e) {
        $("#paid_info").css("display", "none");
        $("#good_info").css("display", "none");
        $("#need_info").css("display", "none");
        $("#love_info").css("display", "block");
        $("#love_info")[0].innerHTML = "You love: " + love;
    });
})