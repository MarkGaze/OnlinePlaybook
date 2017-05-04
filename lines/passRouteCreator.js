class PassRouteCreator {
  static Create(player) {
    player.instruction = new Route(player.x, player.y, 300, 0);
  }
}