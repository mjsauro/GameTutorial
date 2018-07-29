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
		for (var i = 0; i < myAsteroids.length; i++) {
			if (myAsteroids[i].height == 0 | myAsteroids[i].x < 0) {
				myAsteroids.splice(i, 1);				
			}
		}
		for (var j = 0; j < myWeapons.length; j++ ) {
			if (myWeapons[j].height == 0 | myWeapons[j].x > 800) {
				myWeapons.splice(j, j + 1);
			}
		}
	},
	stop: function () {
		clearInterval(this.interval);
	},
	gameOver: function () {
		$("#modal-trigger").trigger("click");			        
	},
	score: function() {
		myScore.text="SCORE: " + myGameArea.frameNo;
		myScore.update();
	},
	kills: function() {
		myKills.text= "KILLS: " + killCount;
		myKills.update();
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
	collisionDetector(myAsteroids);
	weaponDetector(myAsteroids);
	myGameArea.clear();
	myBackground.speedX = -1;
	myBackground.newPos();
	myBackground.update();
	myGameArea.frameNo += 1;
	processAsteroid();
	processPlayerMovement();
	processWeapon();
	myGamePiece.newPos();
	myGamePiece.update();
	myGameArea.score();
	myGameArea.kills();
	
}