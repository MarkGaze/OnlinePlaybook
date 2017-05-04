class Route extends PlayerMovement {
  drawLines () {
    this.drawLine(0, 0, this.length);
    this.addArrowLines(0, this.length);
  }

  drawLine(x, y, length) {
    line(x, y, 0, -length);
  }

  addArrowLines(x, y) {
    line(x - 12, -y + 15, x, -y);
    line(x + 12, -y + 15, x, -y);
  }
}