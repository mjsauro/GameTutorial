var myGamePiece;
var myObstacles = [];
var myWeapons = [];
var myAsteroids = [];
var myEnemies = [];
var myScore;
var myKills;
var killCount = 0;
    function loadComponents() {   
	myGamePiece = new component(30, 30, "assets/spaceship.svg", 10, 120, "image");
	myBackground = new component(1000, 400, "assets/space-background.png", 0, 0, "background");
    myScore = new component("30px", "Consolas", "blue", 280, 60, "text");
    myKills = new component("30px", "Consolas", "blue", 280, 30, "text");
    }