function click_handler(e) {
    var posX = e.clientX;
    var posY = e.clientY;

    //Debugging
    console.log(posX, posY);
}

console.log("Connected");
document.addEventListener("mousemove", click_handler);