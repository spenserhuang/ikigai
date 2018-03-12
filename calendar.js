$(function () {
    generateCalendar();
	$('.date_has_event').each(function () {
		var distance = 10;
		var time = 250;
		var hideDelay = 500;

		var hideDelayTimer = null;

		var beingShown = false;
		var shown = false;

		var trigger = $(this);
		var popup = $('.events ul', this).css('opacity', 0);

		$([trigger.get(0), popup.get(0)]).mouseover(function () {
			if (hideDelayTimer) clearTimeout(hideDelayTimer);
			if (beingShown || shown) {
				return;
			} else {
				beingShown = true;
				popup.css({
					bottom: 20,
					left: -76,
					display: 'block'
				})
				.animate({
					bottom: '+=' + distance + 'px',
					opacity: 1
				}, time, 'swing', function() {
					beingShown = false;
					shown = true;
				});
			}
		}).mouseout(function () {
			if (hideDelayTimer) clearTimeout(hideDelayTimer);
			hideDelayTimer = setTimeout(function () {
				hideDelayTimer = null;
				popup.animate({
					bottom: '-=' + distance + 'px',
					opacity: 0
				}, time, 'swing', function () {
					shown = false;
					popup.css('display', 'none');
				});
			}, hideDelay);
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
    M = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC");
    var calendar = document.getElementById("calendar");
    var title = document.createElement("h3");
    var titlespan = document.createElement("span");
    titlespan.innerHTML = M[m] + ", " + y;
    titlespan.style.marginLeft = "100px";
    titlespan.style.marginRight = "60px";
    title.appendChild(titlespan);
    calendar.appendChild(title);
    var table = document.createElement("table");
    table.cellSpacing = 0;
    var thead = table.createTHead();
    var tbody = table.createTBody();
    var tr = document.createElement("tr");
    var days = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
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
            if (session_flag && event_from <= compareDateMax && event_to >= compareDateMin) {
                td = document.createElement("td");
                td.className = "date_has_event";
                td.innerHTML = date;
                var innerdiv = document.createElement("div");
                innerdiv.className = "events";
                var innerul = document.createElement("ul");
                var innerli = document.createElement("li");
                var titlespan = document.createElement("span");
                titlespan.className = "title";
                titlespan.innerHTML = sessionStorage.getItem("event_title");
                innerli.appendChild(titlespan);
                var descspan = document.createElement("span");
                descspan.className = "desc";
                descspan.innerHTML = "From:" + sessionStorage.getItem("event_from") + "<br />" +
                    "To:" + sessionStorage.getItem("event_to") + "<br />" +
                    "Location:" + sessionStorage.getItem("event_location") + "<br />" +
                    "Remind:" + sessionStorage.getItem("event_remind") + "<br />" +
                    "Note:" + sessionStorage.getItem("event_note");
                innerli.appendChild(descspan);
                innerul.appendChild(innerli);
                innerdiv.appendChild(innerul);
                td.appendChild(innerdiv);
                tr.appendChild(td);
            } else if (compareDateMin == today) {
                td = document.createElement("td");
                td.className = "today";
                td.innerHTML = date;
                tr.appendChild(td);
            } else {
                td = document.createElement("td");
                td.innerHTML = date;
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    }
    calendar.appendChild(table);

    var titleicon = document.createElement("i");
    titleicon.className = "material-icons pointer titleicon";
    titleicon.innerHTML = "add_circle_outline";
    titleicon.setAttribute("onclick", "window.location.href='add_event.html'");
    document.getElementById("screen").appendChild(titleicon);
}
