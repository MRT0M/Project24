
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper (100,470,25);
	ground = new Ground (400,475,800,10);
	box1 = new Dustbin (410,410,20,100); 
	box2 = new Dustbin (590,410,20,100);
	box3 = new Dustbin (500,460,200,20,{isStatic:true});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
  }
}



