$(function () {
    generateCalendar();
    $('.e').each(function () {
        var popup = $('.eventx', this);
        $($(this).get(0), popup.get(0)).mouseover(function () {
            popup.css('display', 'block');
        }).mouseout(function () {
            popup.css('display', 'none');
        });
    });
});

function isLeap(year) {
    return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
}

function generateCalendar() {
    var session_flag = sessionStorage.hasOwnProperty("event_from");
    var event_from = new Date();
    var event_to = new Date();
    var today = new Date();
    if (session_flag) {
        event_from = new Date(sessionStorage.getItem("event_from"));
        event_to = new Date(sessionStorage.getItem("event_to"));
        today = event_from;
    }
    var i, k,
    y = today.getFullYear(),
    m = today.getMonth(),
    d = today.getDate(),
    firstday = new Date(y, m, 1), 
    dayOfWeek = firstday.getDay(),
    days_per_month = new Array(31, 28 + isLeap(y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31),
    str_nums = Math.ceil((dayOfWeek + days_per_month[m]) / 7),
    M = new Array("january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december");
    var calendar = document.getElementById("calendar");
    var title = document.createElement("h3");
    var titlespan = document.createElement("span");
    titlespan.innerHTML = M[m] + ", " + y;
    title.appendChild(titlespan);
    calendar.appendChild(title);
    var table = document.createElement("table");
    table.cellSpacing = 0;
    var thead = table.createTHead();
    var tbody = table.createTBody();
    var tr = document.createElement("tr");
    var days = new Array("sun", "mon", "tue", "wed", "thu", "fri", "sat");
    for (var i = 0; i < 7; i++) {
        th = document.createElement("th");
        th.innerHTML = days[i];
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    
    for (i = 0; i < str_nums; i += 1) {
        var tr = document.createElement("tr");
        for (k = 0; k < 7; k++) {
            var idx = 7 * i + k;
            var date = idx - dayOfWeek + 1;
            (date <= 0 || date > days_per_month[m]) ? date = ' ' : date = idx - dayOfWeek + 1;
            var compareDateMin = new Date(y, m, date, 0, 0, 0);
            var compareDateMax = new Date(y, m, date, 23, 59, 59);
            //if (session_flag && event_from <= compareDateMax && event_to >= compareDateMin) {
                //td = document.createElement("td");
                //td.className = "date_has_event";
                //td.innerHTML = date;
                //var innerdiv = document.createElement("div");
                //innerdiv.className = "events";
                //var innerul = document.createElement("ul");
                //var innerli = document.createElement("li");
                //var titlespan = document.createElement("span");
                //titlespan.className = "title";
                //titlespan.innerHTML = sessionStorage.getItem("event_title");
                //innerli.appendChild(titlespan);
                //var descspan = document.createElement("span");
                //descspan.className = "desc";
                //descspan.innerHTML = "From:" + sessionStorage.getItem("event_from") + "<br />" +
                //    "To:" + sessionStorage.getItem("event_to") + "<br />" +
                //    "Location:" + sessionStorage.getItem("event_location") + "<br />" +
                //    "Remind:" + sessionStorage.getItem("event_remind") + "<br />" +
                //    "Note:" + sessionStorage.getItem("event_note");
                //innerli.appendChild(descspan);
                //innerul.appendChild(innerli);
                //innerdiv.appendChild(innerul);
                //td.appendChild(innerdiv);
            //tr.appendChild(td);
            if (date == "9" || date == "16" || date == "23" || date == "30" || date == "5" || date == "19") {
                td = document.createElement("td");
                td.className = "e";
                td.innerHTML = date;
                var event3 = document.createElement("div");
                event3.className = "common-event bg-color1";
                event3.innerHTML = "DL";
                td.appendChild(event3);
                var eventx = document.createElement("div");
                eventx.className = "eventx bg-color1";
                eventx.innerHTML = "Type: Class<br />Time: 10:20-12:00<br />";
                td.appendChild(eventx);
                tr.appendChild(td);
            } else if (date == "1" || date == "8" || date == "15" || date == "22") {
                td = document.createElement("td");
                td.className = "e";
                td.innerHTML = date;
                var event3 = document.createElement("div");
                event3.className = "common-event bg-color2";
                event3.innerHTML = "HCI";
                td.appendChild(event3);
                var eventx = document.createElement("div");
                eventx.className = "eventx bg-color2";
                eventx.innerHTML = "Type: Practice<br />Time: 10:20-12:00<br />";
                td.appendChild(eventx);
                tr.appendChild(td);
            } else if (date == "6" || date == "12" || date == "27") {
                td = document.createElement("td");
                td.className = "e";
                td.innerHTML = date;
                var event3 = document.createElement("div");
                event3.className = "common-event bg-color3";
                event3.innerHTML = "UIUC";
                td.appendChild(event3);
                var eventx = document.createElement("div");
                eventx.className = "eventx bg-color3";
                eventx.innerHTML = "Type: Research<br />Time: 10:20-12:00<br />";
                td.appendChild(eventx);
                tr.appendChild(td);
            } else {
                td = document.createElement("td");
                td.innerHTML = date;
                var event3 = document.createElement("div");
                event3.className = "common-event bg-color0";
                event3.innerHTML = "DL";
                td.appendChild(event3);
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    }
    calendar.appendChild(table);
}
