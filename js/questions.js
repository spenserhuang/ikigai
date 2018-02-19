var responseCounter = 0;

window.onload = function() {
    $( "#add" ).click(function() {
        var div = document.createElement("div");
        div.className = "response-item";
        div.id = "item" + responseCounter;
        
        var divContent = document.createElement("p");
        var input = document.getElementById("input").value;
        divContent.innerHTML = input;
        div.appendChild(divContent);
        
        var cancel = document.createElement("img");
        cancel.src = "../img/cancel-black.png";
        cancel.id = "cancel" + responseCounter;
        div.appendChild(cancel);
        
        cancel.onclick = deleteNode;
        
        document.getElementById("responses").appendChild(div);
        
        $("input").val("");
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