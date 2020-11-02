
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree,boy,boyImage;
var ground,stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var mango8,mango9,mango10,mango11,mango12;
var launchingForce = 100;

function preload()
{

	boyImage = loadImage("boy.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 boy = createSprite(200,630);
 boy.addImage(boyImage);
 boy.scale = 0.1

 ground = new Ground(400,700,805,20)
 mango1 = new Mango(300,200,40)
 mango2 = new Mango(340,250,40)
 mango3 = new Mango(320,260,40)
 mango4 = new Mango(350,270,40)
 mango5 = new Mango(360,240,40)
 mango6=new Mango(1000,230,30);
 mango7=new Mango(900,230,40);
 mango8=new Mango(1140,150,40);
 mango9=new Mango(1100,230,40);
 mango10=new Mango(1200,200,40);
 mango11=new Mango(1120,50,40);
 mango12=new Mango(900,160,40);

 stone = new Stone(145,570,20)
 tree = new Tree(570,532,400,340)
 launcherObject=new launcher(stone.body,{x:235,y:420})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  textSize(25);
  text("Press 'Space' to get a second chance to play!! 👍",50,50);

  drawSprites();
 
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 mango11.display();
 mango12.display();

 stone.display();
 tree.display();
 ground.display();
 launcherObject.display();
 detectollision(stone,mango1);
 detectollision(stone,mango2);
 detectollision(stone,mango3);
 detectollision(stone,mango4);
 detectollision(stone,mango5);
 detectollision(stone,mango6);
 detectollision(stone,mango7);
 detectollision(stone,mango8);
 detectollision(stone,mango9);
 detectollision(stone,mango10);
 detectollision(stone,mango11);
 detectollision(stone,mango12);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stoneObject.fly();
}

function keyPressed(){
    if(keyCode === 32){
	Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	launcherObject.attach(stone.body);
    }
}

function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
