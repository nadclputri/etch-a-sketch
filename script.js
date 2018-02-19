function newGrid(num) {
    for (var i=0; i<num; i++) {
        for (var j=0; j<num; j++) {
            let div = document.createElement("div");
            div.style.background = "#666666";
            div.style.border = "#000";
            div.className = "grid";

            document.getElementById("container").appendChild(div);
        }

        let jump = document.createElement("br");
        document.getElementById("container").appendChild(jump);
    }

    let boxes = document.querySelectorAll(".grid");
    boxes.forEach(square => {
        square.addEventListener("mouseover", function(event) {
            event.target.style.background = "blue";
        });
    });
}

newGrid(16);