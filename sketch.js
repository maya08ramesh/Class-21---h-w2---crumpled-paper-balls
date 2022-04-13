
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var left;
var right;

function setup() {
createCanvas(1200, 700);

engine = Engine.create();
world = engine.world;

	//Create the Bodies Here.
ground =new Ground(600,670,1200,20);
right = new Ground(1100,600,20,120);
left = new Ground(1000,600,20,120);

var ball_options ={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:2
}


ball = Bodies.circle(50,600,10,ball_options)
World.add(world,ball)


rectMode(CENTER);
ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  ground.display()
  left.display()
  right.display()

  ellipse(ball.position.x,ball.position.y,20)
  





 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:16,y:-25})

	}


   
	
  }
  
 

