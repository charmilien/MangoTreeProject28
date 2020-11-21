
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stone;
var tree, treeImg, boy,boyImage;
var m1,m2,m3,m4,m5,m6,m7,m8;
var chain;
function preload()
{
	treeImg=loadImage("Plucking mangoes/tree.png")
	boyImg=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1000, 530);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,510,1000,50)
	tree=createSprite(770,255,50,550)
	tree.addImage(treeImg)
	tree.scale=0.39
	stone= new Stone(147,374,20)

	m1 = new Mango(720,100,20)
	m2 = new Mango(770,200,20)
	m3 = new Mango(660,200,22)
	m4 = new Mango(800,120,22)
	m5 = new Mango(900,200,17)
	m6 = new Mango(650,250,22)
	m7 = new Mango(830,100,25)
	m8 = new Mango(700,160,17)

	boy=createSprite(200,430,50,200)
	boy.addImage(boyImg)
	boy.scale=0.1

	
	chain=new Launcher(stone.body,{x:147, y:374})

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aquamarine");
  
  drawSprites();
  ground.display();
  m1.display();
  
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	stone.display();
  text(mouseX +"/"+ mouseY, mouseX, mouseY)
	chain.display();
	
	
	detectCollision(stone,m1)
	detectCollision(stone,m2)
	detectCollision(stone,m3)
	detectCollision(stone,m4)
	detectCollision(stone,m5)
	detectCollision(stone,m6)
	detectCollision(stone,m7)
	detectCollision(stone,m8)
 	
}
function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})
}

function mouseReleased()
{
    chain.fly();
}

function keyPressed()
{
	if(keyCode===32)
	{
		Matter.Body.setPosition(stone.body,{x:147, y: 374})
		chain.attach(stone.body)
	}

}

function detectCollision(lstone,lmango)
{

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
