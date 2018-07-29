//game piece constructor
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        if (type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else if (type == "image" || type == "background") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            if (type == "background") {
                ctx.drawImage(this.image, 
                this.x + this.width, this.y, this.width, this.height);
            }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);

            if (type == "weapons") {
                this.speedX = 10;
            }
        }
    };
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    };
    this.crashWith = function (otherObj) {
        var myLeft = this.x;
        var myRight = this.x + (this.width);
        var myTop = this.y;
        var myBottom = this.y + (this.height);
        var otherLeft = otherObj.x;
        var otherRight = otherObj.x + (otherObj.width);
        var otherTop = otherObj.y;
        var otherBottom = otherObj.y + (otherObj.height);
        var crash = true;
        if (
            (myBottom < otherTop) ||
            (myTop > otherBottom) ||
            (myRight < otherLeft) ||
            (myLeft > otherRight)
        ) {
            crash = false;
        }
        return crash;       
    };
    this.weaponHit = function(otherObj) {
        var myRight = this.x + (this.width /2);
        var myLeft = this.x  - (this.width / 2);
        var myTop = this.y + (this.height /2);
        var myBottom = this.y - (this.height / 2); 
        var hit = true;
        var otherTop = otherObj.y + (otherObj.height / 2);
        var otherBottom = otherObj.y - (otherObj.height / 2);    
        var otherLeft = otherObj.x - 10; 
        var otherRight = otherObj.x + 10;

        if (
            myRight >= otherLeft &&
            myRight <= otherRight &&
            myTop <= otherTop &&
            myTop >= otherBottom &&
            myBottom >= otherBottom &&
            myBottom <= otherTop
            )
            {
/*              console.log(this);
                console.log(otherObj);
                console.log("myRight: " + myRight);
                console.log("otherLeft: " + otherLeft);
                console.log("otherRight: " + otherRight);
                console.log("myTop: " + myTop);
                console.log("otherTop: " + otherTop);
                console.log("myBottom: " + myBottom);
                console.log("otherBottom: " + otherBottom);     */                        
                return hit;
            } else {
                hit = false;
                return hit;
            }

    };
}