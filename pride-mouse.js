let flagArray = [];
let flagCoords = [];

//Return mouse position when move
const move_handler = function(e) {
    var posX = e.clientX;
    var posY = e.clientY;

    //Debugging
    console.log(posX, posY);

    //Add new flag
    new_flag(posX, posY);
}

//Make a new flag
const new_flag = function(x, y) {
    //Creating flag
    const newFlag = document.createElement("img");
    newFlag.src = "lesbian.jpg";
    newFlag.style.top = y.toString().concat("px");
    newFlag.style.left = x.toString().concat("px");
    newFlag.style.display = "block";
    newFlag.style.position = "absolute";
    newFlag.style.width = "20px";
    newFlag.style.height = "auto";

    //Adding flag
    document.body.appendChild(newFlag);
    flagArray.push(newFlag);
    flagCoords.push(y);
}

const update_flags = function() {
    for (let i = 0; i < flagArray.length; i++) {
        //Make flags fall
        flagCoords[i] += 10;
        if (flagCoords[i] > 550) {
            //Clear flags that have fallen off-screen
            flagCoords.splice(i,1);
            document.body.removeChild(flagArray[i]);
            flagArray.splice(i,1);
        } else {
            flagArray[i].style.top = flagCoords[i].toString().concat("px");
        }
    }
}

document.addEventListener("mousemove", move_handler);

setInterval(update_flags, 30);