class PlayerMovement {
  constructor(startX, startY, length, angle) {
    this.startX = startX;
    this.startY = startY;
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
    translate(this.startX, this.startY);
    rotate(this.angle);
    this.drawLines();
    pop();
  }

  drawLines() {

  }
}