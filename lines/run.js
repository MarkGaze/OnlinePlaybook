class Run extends PlayerMovement {
  setStrokeColor() {
    stroke(244, 0, 0);
  }
  
  drawLines () {
    line(0, 0, 0, -this.length);
    line(-12, -this.length + 15, 0, -this.length);
    line(12, -this.length + 15, 0, -this.length);
  }
}