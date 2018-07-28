function processAsteroid() {
    if (myGameArea.frameNo == 1 || everyInterval(50)) {
		x = myGameArea.canvas.width;
		minHeight = 20;
		maxHeight = 380;
		height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
		myAsteroids.push(new component(5, 5, "green", x, height));
	}
	for (i = 0; i < myAsteroids.length; i += 1) {
		myAsteroids[i].x += -1;
		myAsteroids[i].update();
	}
}