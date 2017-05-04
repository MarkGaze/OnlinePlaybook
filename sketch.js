var players = []; 
var pos = 400;
var centre;
var defense;

function setup() {
  console.log("Started");
  createCanvas(800, 600);
  pixelDensity(2);

  centre = width / 2;
  
  addOffensiveLine();
  addSkillPlayers();
  addDefense();
}

function addSkillPlayers() {
  players.push(new Player(50, pos, "X"));
  PassRouteCreator.Create(players[players.length - 1]);
  players.push(new Player(width - 50, pos, "Y"));
  PassRouteCreator.Create(players[players.length - 1]);
  players.push(new Player(centre, pos + 70, "1"));
  players.push(new Player(centre - 100, pos + 70, "2"));
  players[players.length - 1].performBlock(110, -15);
  players.push(new Player(centre, pos + 150, "3"));
  RunCreator.Create(players[players.length - 1], 7);
  players.push(new Player(centre + 100, pos + 70, "4"));
  players[players.length - 1].performBlock(110, 15);
}

function addOffensiveLine() {
  var line = new OffensiveLine(centre, pos);
  for(var i = 0; i < line.players.length; i++) {
    players.push(line.players[i]);
    players[i].performBlock(35, 0);
  }
}

function addDefense() {
  defense = new Defense(centre, pos);
}

function draw() {
  Background.draw();
  
  for(var i = 0; i < defense.players.length; i++) {
    defense.players[i].draw();
  }
  
  for(var i = 0; i < players.length; i++) {
    players[i].draw();
  }
}