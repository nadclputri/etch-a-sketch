for (var i=0; i<16; i++) {
    for (var j=0; j<16; j++) {
        var div = document.createElement("div");
        div.style.background = "#666666";
        div.style.border = "#000";
        div.className = "box";
        
        document.getElementById("container").appendChild(div);
    }   

    var jump = document.createElement("br");
    document.getElementById("container").appendChild(jump);
}