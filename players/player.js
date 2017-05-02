class Player
{
  constructor(x, y, position, instruction) {
    this.x = x;
    this.y = y;
    this.position = position;
    this.instruction = instruction;
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
}