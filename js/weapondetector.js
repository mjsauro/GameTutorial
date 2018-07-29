function weaponDetector() {
    if (myWeapons.length > 0) {

        for (var i = 0; i < myWeapons.length; i++) {
            for (var j = 0; j < myAsteroids.length; j++) {
                if (myWeapons[i].weaponHit(myAsteroids[j])) {
                    myWeapons[i].x = -1;
                    myWeapons[i].y = -1;
                    myWeapons[i].height = 0;
                    myWeapons[i].width = 0;
                    myAsteroids[j].x = 0;
                    myAsteroids[j].y = 0;
                    myAsteroids[j].height = 0;
                    myAsteroids[j].width = 0;  
                    killCount += 1;
                    
              
                }
            }
        }
    }
}