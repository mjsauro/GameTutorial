var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 200);
}

//game area
var myGameArea = {
    
    //draw game area
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.canvas.style.cursor = "none";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //update the game area
        this.interval = setInterval(updateGameArea, 20);

    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

//update game every 20ms
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGameArea.speedY = 0;
    processMovement();
    myGamePiece.newPos();
    myGamePiece.update();
}




