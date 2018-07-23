function processObstacle() {

	if (myGameArea.frameNo == 1 || everyInterval(150)) {
		x = myGameArea.canvas.width;
		minHeight = 20;
		maxHeight = 200;
		height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
		minGap = 50;
		maxGap = 200;
		gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
		myObstacles.push(new component(10, height, "red", x, 0));
		myObstacles.push(new component(10, x - height - gap, "red", x, height + gap));
	}
	for (i = 0; i < myObstacles.length; i += 1) {
		myObstacles[i].x += -1;
		myObstacles[i].update();
	}
}