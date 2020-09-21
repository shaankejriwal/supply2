const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1,rect2,rect3;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	rect1 = new Box(400,630,20,100);
	rect1.shapeColor = "red";

	rect2 = new Box(500,630,100,20);
	rect2.shapeColor = "red";

	rect3 = new Box(400,630,100,20);
	rect3.shapeColor = "red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  Box1.display();
  Box2.display();
  Box3.display();
  drawSprites();

}

function keyPressed() {
 if (keyDown("DOWN_ARROW")) {
	Body.setStatic(packageBody,false);
    packageSprite.velocityY = 5;
  }
}



