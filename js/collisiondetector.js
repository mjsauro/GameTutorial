function collisionDetector() {

    for (var i = 0; i < myAsteroids.length; i++) {
        if (myGamePiece.crashWith(myAsteroids[i])) {
            myGameArea.stop();
            myGameArea.gameOver();
        }
    }
}