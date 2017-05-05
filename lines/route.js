class Route extends PlayerMovement {
  drawLines () {
    this.drawLine(0, 0, this.length);
  }

  drawLine(x, y, length) {
    line(x, y, 0, -length);
    push();
    translate(x, y - length);
    rotate(radians(135));
    line(0, 0, 0, -100);
    this.addArrowLines(0, 100);
    pop();
  }

  addArrowLines(x, y) {
    line(x - 12, -y + 15, x, -y);
    line(x + 12, -y + 15, x, -y);
  }
}