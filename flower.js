const r1 = 110;
const r2 = 80;

function setup() {
    createCanvas(600, 600);
    background(7);
    point = new Point(r1, r2);
}

function draw() {
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
    }

    move() {
        this.s += 0.05;
    }

    draw() {
        noStroke();
        fill(250);
        ellipse(300 + (240-this.r1) * cos(this.s) + this.r2 * cos(this.s * (this.r1 - 240) / this.r1),
            300 + (240-this.r1) * sin(this.s) + this.r2 * sin(this.s * (this.r1 - 240) / this.r1), 3, 3);
    }
}
