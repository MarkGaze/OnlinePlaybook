class Run extends PlayerMovement {
  constructor(x, y, length, angle) {
    super(x, y, length);
    this.angle = radians(angle);
  }

  setStrokeColor() {
    stroke(244, 0, 0);
  }
  
  drawLines () {
    rotate(this.angle);
    line(0, 0, 0, -this.length);
    this.addArrowLines(0, this.length);
  }

  addArrowLines(x, y) {
    line(x - 12, -y + 15, x + 0.75, -y);
    line(x + 12, -y + 15, x - 0.75, -y);
  }
}