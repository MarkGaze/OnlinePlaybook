var players = []; 
var pos = 400;
var centre;
var defense;

var block;
var route;
var run;

function setup() {
  console.log("Started");
  createCanvas(800, 600);
  pixelDensity(2);

  centre = width / 2;

  block = new Block(width - 50, pos - 15, 200, -80);
  route = new Route(50, pos, 200);
  run = new Run(centre, pos + 150, 400, 25);
  
  addOffensiveLine();
  addSkillPlayers();
  addDefense();
}

function addSkillPlayers() {
  players.push(new Player(50, pos, "X", route));
  players.push(new Player(width - 50, pos, "Y", block));
  players.push(new Player(centre, pos + 70, "1"));
  players.push(new Player(centre - 100, pos + 70, "2"));
  players.push(new Player(centre, pos + 150, "3", run));
  players.push(new Player(centre + 100, pos + 70, "4"));
}

function addOffensiveLine() {
  var line = new OffensiveLine(centre, pos);
  for(var i = 0; i < line.players.length; i++) {
    players.push(line.players[i]);
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