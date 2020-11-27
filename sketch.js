
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
const Constraint = Matter.Constraint
var rope1

function preload() {

}

function setup() {
  createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;


  ground = new Ground(390, 300, 500, 40);
  pin1 = new Pin(400, 500, 100, 100);
  pin2 = new Pin(300, 500, 100, 100);
  pin3 = new Pin(200, 500, 100, 100);
  pin4 = new Pin(600, 500, 100, 100);
  pin5 = new Pin(500, 500, 100, 100);
  rope1=new Rope(pin1.body, ground.body)
  rope2=new Rope(pin2.body, ground.body)
  rope3=new Rope(pin3.body, ground.body)
  rope4=new Rope(pin4.body, ground.body)
  rope5=new Rope(pin5.body, ground.body)
}




function draw() {

  rectMode(CENTER);
  background(230, 230, 230);
  Engine.run(engine);
  ground.display();
  pin1.display();
  pin2.display();
  pin4.display();
  pin3.display();
  pin5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
     pin3.velocity.x=-3
  }
}














