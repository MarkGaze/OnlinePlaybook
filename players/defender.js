class Defender extends Player {
  constructor(x, y) {
    super(x, y, "");
  }
  draw() {
    super.draw();
  }

  drawShape() {
    fill(0);
    triangle(this.x, this.y - (this.size / 2), this.x - (this.size / 2), this.y + (this.size / 2), this.x + (this.size / 2), this.y + (this.size / 2));
  }
}