let flagArray = [];
let flagCoords = [];
wait = false;

//Return mouse position when move
const move_handler = function(e) {
    var posX = e.clientX;
    var posY = e.clientY;

    //Debugging
    //console.log(posX, posY);

    //Add new flag
    new_flag(posX, posY);
}

//Make a new flag
const new_flag = function(x, y) {
    if (!wait) {
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

        wait = true;
        setTimeout(flag_timeout, 15);
    }
}

const update_flags = function() {
    //Delete excess flags
    if (flagArray.length > 5) {
        //console.log("Check for updates!");
        document.body.removeChild(flagArray[0]);
        flagArray.shift();
        flagCoords.shift();
    }
}

const flag_timeout = function() {
    wait = false;
}

document.addEventListener("mousemove", move_handler);

setInterval(update_flags, 10);