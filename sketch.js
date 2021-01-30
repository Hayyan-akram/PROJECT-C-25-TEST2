const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	box1 = new Dustbin(500,520,10,200);
	box2 = new Dustbin(655,520,10,200);
	box3 = new Dustbin(575,520,130,10);

	paperObject = new Paper(200,520,20,20)
	
	ground = new Ground(300,height,1000,20);

	


	Engine.run(engine);
  
}


function draw() {
background("blue");
	box1.display();
	box2.display();
	box3.display();
	ground.display();
	paperObject.display();
  rectMode(CENTER);
  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}



