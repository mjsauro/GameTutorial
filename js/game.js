function startGame() {
	myGameArea.start();
	loadComponents();
}

//game area
var myGameArea = {

	//draw game area
	canvas: document.createElement("canvas"),
	start: function () {
		this.canvas.width = 800;
		this.canvas.height = 400;
		this.canvas.style.cursor = "none";
		this.context = this.canvas.getContext("2d");
		this.frameNo = 0;
		var contentDiv = document.getElementById("canvas-container");
		contentDiv.appendChild(this.canvas);

		//update the game area
		this.interval = setInterval(updateGameArea, 20);

	},
	clear: function () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop: function () {
		clearInterval(this.interval);
	}
};

function everyInterval(n) {
	if ((myGameArea.frameNo / n) % 1 == 0) {
		return true;
	} else {
		return false;
	}
}

//update game every 20ms
function updateGameArea() {

	for (i = 0; i < myObstacles.length; i++) {
		if (myGamePiece.crashWith(myObstacles[i])) {
			myGameArea.stop();
			$("#modal-trigger").trigger("click");			
			return;
		}
	}
	myGameArea.clear();
	myBackground.speedX = -1;
	myBackground.newPos();
	myBackground.update();
	myGameArea.frameNo += 1;
	myScore.text="SCORE: " + myGameArea.frameNo;
	processObstacle();
	processAsteroid();
	processPlayerMovement();
	myGamePiece.newPos();
	myGamePiece.update();
	processWeapon();
/* 	myLaserWeapon.newPos();
	myLaserWeapon.update(); */
	myScore.update();
	

}