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
    line(-12, -this.length + 15, 0, -this.length);
    line(12, -this.length + 15, 0, -this.length);
  }
}