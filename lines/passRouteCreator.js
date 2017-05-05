class PassRouteCreator {
  static Create(player) {
    var side = 1;
    if(player.x > centre)
      side = -1;
    
    player.instruction = new Route(player.x, player.y, 300, side);
  }
}