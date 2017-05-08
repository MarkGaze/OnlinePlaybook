class Defense {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get players() {
    var players = []; 
    players.push(new Defender(this.x - 40, this.y - 50));
    players.push(new Defender(this.x + 40, this.y - 50));
    players.push(new Defender(this.x - 120, this.y - 50));
    players.push(new Defender(this.x + 120, this.y - 50));
    players.push(new Defender(this.x - 40, this.y - 120));
    players.push(new Defender(this.x + 40, this.y - 120));
    players.push(new Defender(this.x - 110, this.y - 110));
    players.push(new Defender(this.x + 110, this.y - 110));
    players.push(new Defender(250, this.y - 50));
    players.push(new Defender(width - 250, this.y - 50));
    players.push(new Defender(this.x, this.y - 250));
    return players;
  }
}