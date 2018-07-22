function processObstacle() {
    myGameArea.frameNo += 1;
	if (myGameArea.frameNo == 1 || everyInterval(150)) {
		x = myGameArea.canvas.width;
		y = myGameArea.canvas.height - 200;
		myObstacles.push(new component(10, 200, "red", x, y));
	}
	for (i = 0; i < myObstacles.length; i += 1) {
		myObstacles[i].x += -1;
		myObstacles[i].update();
	}
}