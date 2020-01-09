function setup() {
    halfWidth = windowWidth * 0.5;
    halfHeight = windowHeight * 0.5;
    if (halfHeight > halfWidth) {
        r = halfWidth * 0.9;
    } else {
        r = halfHeight * 0.9;
    }
    r1 = r * 0.424;
    r2 = r1 * (0.2 + Math.random() * 0.8);

    createCanvas(halfWidth * 2, halfHeight * 2);
    background(7);
    point = new Point(r1, r2);
}

const colorR = 150 + Math.random() * 105;
const colorG = 150 + Math.random() * 105;
const colorB = 150 + Math.random() * 105;
if (Math.random() < 0.5) {
    var t = 0.05;
} else {
    var t = -0.05;
}

function draw() {
    strokeWeight(1);
    stroke(200);
    fill(0, 2);
    ellipse(halfWidth, halfHeight, r * 2, r * 2);

    point.move();
    point.draw();
}

class Point {
    constructor(r1, r2) {
        this.r1 = r1;
        this.r2 = r2;
        this.t = 0;
        this.x = halfWidth + r - r1 + r2;
        this.y = halfHeight;
    }

    move() {
        this.t += t;
    }

    draw() {
        var beforeX = this.x;
        var beforeY = this.y;
        this.x = halfWidth + (r - this.r1) * cos(this.t) + this.r2 * cos(this.t * (this.r1 - r) / this.r1);
        this.y = halfHeight + (r - this.r1) * sin(this.t) + this.r2 * sin(this.t * (this.r1 - r) / this.r1);
        strokeWeight(3);
        stroke(colorR, colorG, colorB);
        line(beforeX, beforeY, this.x, this.y);
    }
}
