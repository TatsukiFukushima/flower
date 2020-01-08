const r1 = 106;
const r2 = r1 * (0.2 + Math.random() * 0.8);
const colorR = 150 + Math.random() * 105;
const colorG = 150 + Math.random() * 105;
const colorB = 150 + Math.random() * 105;

function setup() {
    createCanvas(600, 600);
    background(7);
    point = new Point(r1, r2);
}

function draw() {
    strokeWeight(1);
    stroke(200);
    fill(0, 2);
    ellipse(300, 300, 480, 480);

    point.move();
    point.draw();
}

class Point {
    constructor(r1, r2) {
        this.r1 = r1;
        this.r2 = r2;
        this.s = 0;
        this.x = 540 - r1 + r2;
        this.y = 300;
    }

    move() {
        this.s += 0.05;
    }

    draw() {
        var beforeX = this.x;
        var beforeY = this.y;
        this.x = 300 + (240-this.r1) * cos(this.s) + this.r2 * cos(this.s * (this.r1 - 240) / this.r1);
        this.y = 300 + (240-this.r1) * sin(this.s) + this.r2 * sin(this.s * (this.r1 - 240) / this.r1);
        strokeWeight(3);
        stroke(colorR, colorG, colorB);
        line(beforeX, beforeY, this.x, this.y);
    }
}
