var responseCounter = 0;

window.onload = function() {
    $( "#add" ).click(function() {
        var div = document.createElement("div");
        div.className = "response-item";
        div.id = "item" + responseCounter;
        responseCounter ++;
        
        var divContent = document.createElement("p");
        var input = document.getElementById("input").value;
        divContent.innerHTML = input;
        div.appendChild(divContent);
        
        var cancel = $('<img />').attr({"src": "../img/cancel-black.png"}).appendTo(div);

        document.getElementById("responses").appendChild(div);
        
        $("input").val("");
    });
    
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