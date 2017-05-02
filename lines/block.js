class Block extends PlayerMovement {
  drawLines() {
    line(0, 0, 0, -this.length);
    line(-10, -this.length, 10, -this.length);
  }
}