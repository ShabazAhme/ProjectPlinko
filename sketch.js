const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisonHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,10);
  p = new Part(200,400,50,50);
  
}
function draw() {
  background("orange");  
  Engine.update(engine);
  
  ground.display();
  p.display();
  // for(var k = 0; k<=width; k = k + 80){
  //   divisions.push(new Div(k,this.Division.height - divisonHeight/2,10,divisonHeight));
  // }
  for (var j = 40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  
  drawSprites();
}