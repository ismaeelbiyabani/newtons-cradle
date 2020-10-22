
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bobSprite,bobIMG;
function preload()
{
	
}

function setup() {
	createCanvas(800,800);

	groundSprite=createSprite(width/2, height-400, 200,10);
	groundSprite.shapeColor=color("darkred")

	bobSprite1=createSprite(width/2,400,10,10)
	bobSprite1.shapeColor=("darkgreen")
	bobSprite2=createSprite(411,400,10,10)
	bobSprite2.shapeColor=("darkwhite")
	bobSprite3=createSprite(389,400,10,10)
	bobSprite3.shapeColor=("black")
	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(50,650,5,5);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  bob.display();
  drawSprites();
 
}



