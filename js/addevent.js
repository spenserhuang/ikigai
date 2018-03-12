var ikigai_love = 0;
var ikigai_good = 0;
var ikigai_need = 0;
var ikigai_paid = 0;
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
$("#wholeday_check").click(function (e) {
    if (document.getElementById("wholeday_check").checked) {
        $("#from_date").val("");
        $("#end_date").val(""); $('.form_datetime').datetimepicker("remove");
        $('.form_datetime').datetimepicker({
            weekStart: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1,
            maxView: 2,
            minView: 2,
            viewSelect: 2,
            format: 'yyyy-mm-dd',
            initialDate: new Date(),
        });
    } else {
        $("#from_date").val("");
        $("#end_date").val(""); $('.form_datetime').datetimepicker("remove");
        $('.form_datetime').datetimepicker({
            weekStart: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1,
            maxView: 2,
            minView: 0,
            format: 'yyyy-mm-dd hh:ii',
            initialDate: new Date()
        });
    }
});

$('.form_datetime').datetimepicker({
    weekStart: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    showMeridian: 1,
    maxView: 1
});

$("#submit_event").click(function (e) {
    sessionStorage.setItem("event_from", $("#from_date").val());
    sessionStorage.setItem("event_to", $("#end_date").val());
    sessionStorage.setItem("event_title", $("#title").val());
    sessionStorage.setItem("event_location", $("#location").val());
    sessionStorage.setItem("event_remind", $("#remind").val());
    sessionStorage.setItem("event_note", $("#note").val());
    alert("Task \"" + $("#title").val() + "\" has been created!");
    window.location.href = "calendar.html";
});