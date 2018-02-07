console.log("Run javascript file");

for (var i=0; i<16; i++) {
    for (var j=0; j<16; j++) {
        var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = "#666666";
        div.style.border = "#000";

        var jump = document.createElement("br");
        
        document.getElementById("container").appendChild(jump);
        document.getElementById("container").appendChild(div);
    }
}