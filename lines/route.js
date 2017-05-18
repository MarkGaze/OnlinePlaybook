class Route extends PlayerMovement {
  constructor(x, y, definition, side) {
    super(x, y);
    this.definition = definition;
    this.side = side;
  }
  
  drawLines () {
    var x = 0;
    var y = 0;
    for (var i = 0; i < this.definition.length; i++) {
      var line = this.definition[i];
      var last = (i == this.definition.length - 1);
      var distance = line.distance * YardSize;
      this.drawLine(x, y, distance, line.angle, last);
      y = distance - 1;
    }
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
    line(x - 12, -y + 15, x + 0.75, -y);
    line(x + 12, -y + 15, x - 0.75, -y);
  }
}