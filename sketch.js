const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground
var pig1
var log1
var log2
var log3

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,320,50,50);
    box2 = new Box(200,320,50,50);
    ground = new Ground(600,height,1200,25)
    pig1 = new Pig(700,350);
    log1 = new Log(500,260,300,PI/2)

    box3 = new Box(400,220,50,50);
    box4 = new Box(600,220,50,50);
    pig2 = new Pig(810,220);
    log3 = new Log(210,180,300,PI/2);
    box5 = new Box(610,160,50,50);
    log4 = new Log(780,120,150,PI/7);
    log5 = new Log(555,120,150,-PI/7);

    bird = new Bird(601,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   ground.display();
   pig1.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log3.display();
   log4.display();
   log5.display();
   box5.display();
   bird.display();
}