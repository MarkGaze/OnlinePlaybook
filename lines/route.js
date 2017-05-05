class Route extends PlayerMovement {
  constructor(x, y, length, side) {
    super(x, y, length);
    this.side = side;
  }
  drawLines () {
    this.drawLine(0, 0, this.length);
  }

  drawLine(x, y, length) {
    line(x, y, 0, -length);
    push();
    translate(x, y - length);
    var angle = 135 * this.side; 
    rotate(radians(angle));
    line(0, 0, 0, -100);
    this.addArrowLines(0, 100);
    pop();
  }

  addArrowLines(x, y) {
    line(x - 12, -y + 15, x, -y);
    line(x + 12, -y + 15, x, -y);
  }
}