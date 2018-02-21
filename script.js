function newGrid(num) {
    for (var i=0; i<num; i++) {
        for (var j=0; j<num; j++) {
            let div = document.createElement("div");
            div.style.border = "#000";
            div.className = "grid";

            document.getElementById("container").appendChild(div);
        }
    }

    let boxes = document.querySelectorAll(".grid");
    boxes.forEach(square => {
        square.addEventListener("mouseenter", function() {
            square.classList.add("hovergrid");
            console.log(square.classList);
        });
    });
}

function clearGrid() {
    let num = prompt("Squares for new grid: ");

    let grid = document.getElementById("container");
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }

    let boxes = document.querySelectorAll(".grid");
    boxes.forEach(square => {
        square.classList.remove("hovergrid");
    });

    newGrid(num);

    document.getElementById("container").style.setProperty("--colNum", num);
    document.getElementById("container").style.setProperty("--rowNum", num);
}

newGrid(16);
document.getElementById("container").style.setProperty("--colNum", 16);
document.getElementById("container").style.setProperty("--rowNum", 16);