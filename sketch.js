var players = []; 
var pos = 400;
var centre;
var defense;
var block;

function setup() {
  console.log("Started");
  createCanvas(800, 600);
  centre = width / 2;

  block = new Block(centre, pos - 15, 40, 45);
  addOffensiveLine();
  addSkillPlayers();
  addDefense();
}

function addSkillPlayers() {
  players.push(new Player(50, pos, "X", block));
  players.push(new Player(width - 50, pos, "Y"));
  players.push(new Player(centre, pos + 70, "1"));
  players.push(new Player(centre - 100, pos + 70, "2"));
  players.push(new Player(centre, pos + 150, "3"));
  players.push(new Player(centre + 100, pos + 70, "4"));
}

function addOffensiveLine() {
  var line = new OffensiveLine(centre, pos);
  for(i = 0; i < line.players.length; i++) {
    players.push(line.players[i]);
  }
}

function addDefense() {
  defense = new Defense(centre, pos);
}

function draw() {
  Background.draw();
  
  for(i = 0; i < defense.players.length; i++) {
    defense.players[i].draw();
  }
  
  for(i = 0; i < players.length; i++) {
    players[i].draw();
  }
}