const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, ground, ball

function setup() {
  var canvas = createCanvas(800,400)

  engine = Engine.create();
  world = engine.world;

  var options = {

    isStatic: true
  }
  ground = Bodies.rectangle(400,390,800,20,options)
  World.add(world,ground)

  var tennisBall = {

    restitution: 2
  }
  ball = Bodies.circle(400,10,40,tennisBall)
  World.add(world,ball)
}
function draw() {
  background(0); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y,800,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,40,40)
}