let flagArray = [];

//Return mouse position when move
const click_handler = function(e) {
    var posX = e.clientX;
    var posY = e.clientY;

    //Debugging
    console.log(posX, posY);
}

//Make a new flag
const new_flag = function(x, y) {
    //Creating flag
    const newFlag = document.createElement("img");
    newFlag.src = "lesbian.jpg";
    newFlag.style.top = y.toString().concat("px");
    newFlag.style.left = x.toString().concat("px");
    newFlag.style.display = "block";
    newFlag.style.position = "relative";
    newFlag.style.width = "20px";
    newFlag.style.height = "auto";

    //Adding flag
    document.body.appendChild(newFlag);
    flagArray.push(newFlag);
}

document.addEventListener("mousemove", click_handler);

//Testing
new_flag(100,200);