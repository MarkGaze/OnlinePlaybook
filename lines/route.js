class Route extends PlayerMovement {
  constructor(x, y, length, side) {
    super(x, y, length);
    this.side = side;
  }
  
  drawLines () {
    this.drawLine(0, 0, this.length);
    this.drawLine(0, this.length, this.length, 90, true);
  }

  drawLine(x, y, length, angle, last = false) {
    push();
    translate(x, -y);
    angle = angle * this.side; 
    rotate(radians(angle));
    line(0, 0, 0, -length);
    if(last)
	    this.addArrowLines(0, length);
    pop();
  }

  addArrowLines(x, y) {
    line(x - 12, -y + 15, x, -y);
    line(x + 12, -y + 15, x, -y);
  }
}