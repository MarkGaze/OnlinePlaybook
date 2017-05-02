class Center extends Player {
    draw() {
      super.draw();
    }

    drawShape() {
      rectMode(CENTER);
      fill(255);
      rect(this.x, this.y, this.size, this.size);
    }
}