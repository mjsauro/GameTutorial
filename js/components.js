    //myGamePiece = new component(30, 30, "blue", 10, 200);
var myGamePiece;
var myBackground;
var myObstacles = [];
var myScore;
    function loadComponents() {   
	myGamePiece = new component(30, 30, "assets/spaceship.svg", 10, 120, "image");
	myBackground = new component(1000, 400, "assets/space-background.png", 0, 0, "background");
	myObstacle = new component(10, 200, "red", 300, 120);
    myScore = new component("30px", "Consolas", "blue", 280, 40, "text");
}