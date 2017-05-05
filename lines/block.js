class Block extends PlayerMovement {
  constructor(x, y, length, angle) {
    super(x, y, length);
    this.angle = radians(angle);
  }

  drawLines() {
    rotate(this.angle);
    line(0, 0, 0, -this.length);
    line(-10, -this.length, 10, -this.length);
  }
}