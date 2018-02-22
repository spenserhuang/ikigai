var responseCounter = 0;

window.onload = function () {
    $( "#add" ).click(function() {
        var div = document.createElement("div");
        div.className = "response-item";
        div.id = "item" + responseCounter;
        
        var divContent = document.createElement("p");
        //var input = document.getElementById("input").value;
        var input = "";
        if (document.getElementById("input-paid")) {
            input = $("#input-paid").val();
            $("#input-paid").val("");
            var paid = new Array();
            if (sessionStorage.hasOwnProperty("paid")) {
                paid.push(sessionStorage.getItem("paid"));
            }
            paid.push(input);
            sessionStorage.setItem("paid", paid);
        } else if (document.getElementById("input-good")) {
            input = $("#input-good").val();
            $("#input-good").val("");
            var good = new Array();
            if (sessionStorage.hasOwnProperty("good")) {
                good.push(sessionStorage.getItem("good"));
            }
            good.push(input);
            sessionStorage.setItem("good", good);
        } else if (document.getElementById("input-need")) {
            input = $("#input-need").val();
            $("#input-need").val("");
            var need = new Array();
            if (sessionStorage.hasOwnProperty("need")) {
                need.push(sessionStorage.getItem("need"));
            }
            need.push(input);
            sessionStorage.setItem("need", need);
        } else {
            input = $("#input-love").val();
            $("#input-love").val("");
            var love = new Array();
            if (sessionStorage.hasOwnProperty("love")) {
                love.push(sessionStorage.getItem("love"));
            }
            love.push(input);
            sessionStorage.setItem("love", love);
        }
        divContent.innerHTML = input;
        div.appendChild(divContent);
        
        var cancel = document.createElement("img");
        cancel.src = "../img/cancel-black.png";
        cancel.id = "cancel" + responseCounter;
        div.appendChild(cancel);
        
        cancel.onclick = deleteNode;
        
        document.getElementById("responses").appendChild(div);
        
        //$("input").val("");
        responseCounter ++;
    });
}

function deleteNode(mouseEvent) {
    parentId = this.id.substr(6);
    $("#item" + parentId).remove();
}



// PSEUDOCODE
/* 
    When button is clicked
        Create div 
        Give div class name "response-item"
        Give it ID of "item" + counter i that increases over time
        Add p tag into div
        Take value of input field 
        Insert input value into p tag
        Add X image at the end
        Update i counter 
*/