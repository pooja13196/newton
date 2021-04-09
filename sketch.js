
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, groundObject
var chain1,chain2,chain3, chain4,chain5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	groundObject=new Ground(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	

	chain1=new chain(bobObject1.body,groundObject.body,-bobDiameter*2, 0)

	chain2=new chain(bobObject2.body,groundObject.body,-bobDiameter*1, 0)
	chain3=new chain(bobObject3.body,groundObject.body,0, 0)
	chain4=new chain(bobObject4.body,groundObject.body,bobDiameter*1, 0)
	chain5=new chain(bobObject5.body,groundObject.body,bobDiameter*2, 0)

	

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  groundObject.display();

  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 

 
}





