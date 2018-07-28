// listen for weapon to be fired
$(document).keyup(function (key) {
    if (key.keyCode == 32) {
        myWeapons.push(new component(20, 2, "white", myGamePiece.x + 20, myGamePiece.y + 15, "weapons"));
    }
});

function processWeapon() {

    if (myWeapons.length < 1) {
        return;
    }
    for (var i = 0; i < myWeapons.length; i++) {
        myWeapons[i].newPos();
        myWeapons[i].update();
    }
}