const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;
var box1, box2;
var ground ;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

 box1 = new Box(200,300,50,50);
 box2 = new Box(240,100,50,100)
 ground = new Ground (200,height,400,10)

}

function draw() {
  background(0);
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();

  console.log(box1);
  console.log(box2);
  //console.log(ground);
  
 
}
