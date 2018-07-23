var myGamePiece;
var myBackground;
var myObstacles = [];
var myScore;

function startGame() {
	myGameArea.start();
	//old game piece as block
	//myGamePiece = new component(30, 30, "blue", 10, 200);
	myGamePiece = new component(30, 30, "assets/spaceship.svg", 10, 120, "image");
	myBackground = new component(656, 270, "assets/space-background.png", 0, 0, "background");
	myObstacle = new component(10, 200, "red", 300, 120);
	myScore = new component("30px", "Consolas", "blue", 280, 40, "text");

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
		this.frameNo = 0;
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);

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
	var x, y;
	for (i = 0; i < myObstacles.length; i++) {
		if (myGamePiece.crashWith(myObstacles[i])) {
			myGameArea.stop();
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
	processPlayerMovement();
	myGamePiece.newPos();
	myGamePiece.update();
	myScore.update();
	

}