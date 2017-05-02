class Background {
  static draw() {
    const yardSize = 25;
    for (var i = 0; i < height; i += yardSize * 5) {
      stroke(180);
      strokeWeight(3);
      strokeCap(SQUARE);
      line(0, i, width, i);
      for (var j = 0; j < 5; j++) {
        line(210, i + (j * yardSize), 230, i + (j * yardSize));
        line(width - 230, i + (j * yardSize), width - 210, i + (j * yardSize));
      }
    }
  }
}