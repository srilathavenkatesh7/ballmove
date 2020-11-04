var hypnoticBall, database;
var position;
var gameState=0;
var form,player,game;
var playerCount;
function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game=new Game();
  game.getstate();
  game.start();
}

function draw(){
  background("white");
  
    
  
}

