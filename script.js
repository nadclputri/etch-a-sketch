// Create 16x16 grid

for (var i=0; i<16; i++) {
    for (var j=0; j<16; j++) {
        let div = document.createElement("div");
        div.style.background = "#666666";
        div.style.border = "#000";
        div.className = "grid";

        document.getElementById("container").appendChild(div);
    }   

    let jump = document.createElement("br");
    document.getElementById("container").appendChild(jump);
}

// Add hover effect to grid
let boxes = document.querySelectorAll(".grid");
boxes.forEach(square => {
    square.addEventListener("mouseover", function(event) {
        event.target.style.background = "blue";
    });
});