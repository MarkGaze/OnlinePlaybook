const YardSize = 25;

var players = []; 
var pos;
var centre;
var defense;

function preload() {
  PassRouteCreator.LoadRoutes();
}

function setup() {
  noLoop();

  createCanvas(1200, 800);
  pixelDensity(2);

  pos = height - (10 * YardSize);
  centre = width / 2;
  
  addPlayers();
}

function addPlayers() {
  addOffensiveLine();
  addSkillPlayers();
  addDefense();
}

function addSkillPlayers() {
  players.push(new Player(10 * YardSize, pos, "X"));
  PassRouteCreator.Create(players[players.length - 1], "slant");
  players.push(new Player(width - (10 * YardSize), pos, "Y"));
  PassRouteCreator.Create(players[players.length - 1], "slant");
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
  background(255);

  Background.draw();

  for(var i = 0; i < defense.players.length; i++) {
    defense.players[i].draw();
  }
  
  for(var i = 0; i < players.length; i++) {
    players[i].draw();
  }
}