class OffensiveLine {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get players() {
    var players = []; 
    players.push(new Player(this.x - 100, this.y, "T"));
    players.push(new Player(this.x - 50, this.y, "G"));
    players.push(new Center(this.x, this.y - 8, "C"));
    players.push(new Player(this.x + 50, this.y, "G"));
    players.push(new Player(this.x + 100, this.y, "T"));
    return players;
  }
}