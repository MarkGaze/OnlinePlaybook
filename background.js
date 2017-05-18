class Background {
  static draw() {
    for (var i = height; i > -5 * YardSize; i -= YardSize * 5) {
      stroke(180);
      strokeWeight(3);
      strokeCap(SQUARE);
      line(0, i, width, i);
      for (var j = 0; j < 5; j++) {
        line(centre - 210, i + (j * YardSize), centre - 230, i + (j * YardSize));
        line(centre + 230, i + (j * YardSize), centre + 210, i + (j * YardSize));
      }
    }
  }
}