class PlayerMovement {
  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
  }

  setStrokeColor() {
    stroke(244, 200, 66);
  }

  draw() {
    strokeWeight(3);
    this.setStrokeColor();

    push();
    translate(this.x, this.y);
    this.drawLines();
    pop();
  }
}