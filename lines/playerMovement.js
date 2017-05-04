class PlayerMovement {
  constructor(x, y, length, angle) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.angle = radians(angle);
  }

  setStrokeColor() {
    stroke(244, 200, 66);
  }

  draw() {
    strokeWeight(3);
    this.setStrokeColor();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    this.drawLines();
    pop();
  }

  drawLines() {

  }
}