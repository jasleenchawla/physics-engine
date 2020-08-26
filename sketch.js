
//name spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//sprites are created
var engine, world;
var ground;
var box;
var box2;
var ball;
var ball2;

function setup(){
    var canvas = createCanvas(400,400);
    //replica so that main engine is not disturbed
    engine = Engine.create();
    world = engine.world;

//static position
    var ground_options ={
        isStatic: true
    }
//ground
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var box_options = {
        restitution:0.8
    }
    //box
box = Bodies.rectangle(150,300,50,60,box_options);
World.add(world,box);
//bouncing
var box2_options ={
    restitution:0.7
}
//box2

box2 = Bodies.rectangle(300,150,70,60,box2_options);
World.add(world,box2);
//static position
var ball_option ={
    isStatic:true
}
//ball
ball = Bodies.circle(350,250,80,ball_option);
World.add(world,ball);

var ball2_option ={
    isStatic:true
}
//ball2
ball2 = Bodies.circle(400,80,30,ball2_option);
World.add(world,ball2);
    console.log(ground);
}

function draw(){
    background(0);
    //updating engine
    Engine.update(engine);
    //center alligned
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x,box.position.y,50,60);
    rect(box2.position.x,box2.position.y,70,60);
    //center alligned radius
    ellipseMode (RADIUS)
    fill("red")
    ellipse(ball.position.x,ball.position.y,80,80)
    ellipse(ball2.position.x,ball2.position.y,30,30)
}