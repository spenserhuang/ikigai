$(function () {
    var paid = (sessionStorage.hasOwnProperty("paid") ? sessionStorage.getItem("paid") : "nothing").split(",");
    var good = (sessionStorage.hasOwnProperty("good") ? sessionStorage.getItem("good") : "nothing").split(",");
    var need = (sessionStorage.hasOwnProperty("need") ? sessionStorage.getItem("need") : "nothing").split(",");
    var love = (sessionStorage.hasOwnProperty("love") ? sessionStorage.getItem("love") : "nothing").split(",");
        
    $("#paid-circle")[0].innerHTML = paid[0];
    $("#good-circle")[0].innerHTML = good[0];
    $("#need-circle")[0].innerHTML = need[0];
    $("#love-circle")[0].innerHTML = love[0];

    $("#paid_info").css("display", "block");
    $("#good_info").css("display", "none");
    $("#need_info").css("display", "none");
    $("#love_info").css("display", "none");

    $("#paid").mousemove(function (e) {
        $("#paid_info").css("display", "block");
        $("#good_info").css("display", "none");
        $("#need_info").css("display", "none");
        $("#love_info").css("display", "none");
        $("#paid_info")[0].innerHTML = paid;
    });

    $("#good").mousemove(function (e) {
        $("#paid_info").css("display", "none");
        $("#good_info").css("display", "block");
        $("#need_info").css("display", "none");
        $("#love_info").css("display", "none");
        $("#good_info")[0].innerHTML = good;
    });

    $("#need").mousemove(function (e) {
        $("#paid_info").css("display", "none");
        $("#good_info").css("display", "none");
        $("#need_info").css("display", "block");
        $("#love_info").css("display", "none");
        $("#need_info")[0].innerHTML = need;
    });

    $("#love").mousemove(function (e) {
        $("#paid_info").css("display", "none");
        $("#good_info").css("display", "none");
        $("#need_info").css("display", "none");
        $("#love_info").css("display", "block");
        $("#love_info")[0].innerHTML = love;
    });
})
