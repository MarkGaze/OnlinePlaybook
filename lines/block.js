class Block {
  constructor(startX, startY, length, angle) {
    this.startX = startX;
    this.startY = startY;
    this.length = length;
    this.angle = radians(angle);
  }

  draw() {
    strokeWeight(3);
    stroke(244, 200, 66);
    push();
    translate(this.startX, this.startY);
    rotate(this.angle);
    line(0, 0, 0, -this.length);
    line(-8, -this.length, 8, -this.length);
    pop();
  }
}