class Player
{
  constructor(x, y, position) {
    this.x = x;
    this.y = y;
    this.position = position;
  }

  get size() {
    return 30;
  }

  draw() {
    if(this.instruction != undefined) {
      this.instruction.draw();
    }

    strokeWeight(1);
    stroke(50);
    this.drawShape();
    this.drawText();
  }

  drawText() {
    noStroke();
    fill(0);
    textFont("Calibri");
    textAlign(CENTER, CENTER);
    textSize(this.size * 0.65);
    textStyle(BOLD);
    text(this.position, this.x, this.y);
  }
  
  drawShape() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }

  performBlock(length, angle) {
    this.instruction = new Block(this.x, this.y, length, angle);
  }

  performRoute(length, angle) {
    this.instruction = new Route(this.x, this.y, length, angle);
  }

  performRun(length, angle) {
    this.instruction = new Run(this.x, this.y, length, angle);
  }
}