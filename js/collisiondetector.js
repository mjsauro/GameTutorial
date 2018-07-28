function collisionDetector(item) {

    for (i = 0; i < item.length; i++) {
        if(myGamePiece.crashWith(item[i])) {
            myGameArea.stop();
            myGameArea.gameOver();
        }
    }

}

//old obstacle detector
/* for (i = 0; i < myObstacles.length; i++) {
    if (myGamePiece.crashWith(myObstacles[i])) {
        myGameArea.stop();
        $("#modal-trigger").trigger("click");			
        return;
    }
} */