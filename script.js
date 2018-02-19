function newGrid(num) {
    for (var i=0; i<num; i++) {
        for (var j=0; j<num; j++) {
            let div = document.createElement("div");
            div.style.background = "#666666";
            div.style.border = "#000";
            div.className = "grid";

            document.getElementById("container").appendChild(div);
        }
    }

    let boxes = document.querySelectorAll(".grid");
    boxes.forEach(square => {
        square.addEventListener("mouseover", function(event) {
            event.target.style.background = "#ffa664";
        });
    });
}

function clearGrid() {
    let newBox = prompt("Squares for new grid: ");
    newGrid(newBox);
}

newGrid(16);