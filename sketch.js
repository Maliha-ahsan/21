
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world

var ball
var ground
var leftSide
var rightSide
function setup() {
	createCanvas(1000, 500);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(500,480,1000,20)
leftSide = new Ground(650,430,10,70)
rightSide = new Ground(850,430,10,70)
ball=Bodies.circle(100,200,20,ball_options)
var ball_options={
	isStatic:false,restitution:0.3,friction:0,density:1.2
}
World.add(world,ball)
	Engine.run(engine);
  rectMode(CENTER)
  ellipseMode(RADIUS)
}


function draw() {
	background(51);
	ground.display();
	Engine.update(engine);
	ellipse(ball.position.x,ball.position.y,20,20)
leftSide.display()
rightSide.display()
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.05,y:-0.06})
	}
}

