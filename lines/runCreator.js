class RunCreator {
  static Create(player, hole, side) {
    var angle;
    switch (hole) {
      case 1: angle = -10; break;
      case 2: angle = 10; break;
      case 3: angle = -27; break;
      case 4: angle = 27; break;
      case 5: angle = -40; break;
      case 6: angle = 40; break;
      case 7: angle = -50; break;
      case 8: angle = 50; break;
    }
    player.instruction = new Run(player.x, player.y, 300, angle);
  }
}