$("#submit_tag").click(function (e) {
    var input = $("#tagname").val();
    var typeArray = new Array("paid", "good", "need", "love");
    for (var i = 0; i < 4; i++) {
        if (document.getElementById(typeArray[i]).checked) {
            var temp = new Array();
            if (sessionStorage.hasOwnProperty(typeArray[i])) {
                temp.push(sessionStorage.getItem(typeArray[i]));
            }
            temp.push(input);
            sessionStorage.setItem(typeArray[i], temp);
        }
    }

    window.location.href = "my_ikigai.html";
});


