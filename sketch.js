const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2,pig1,pig3,log1,log3,log4,log5,box3,box4,box5,bird
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(100,100,100,100)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350,50,50)
    log1 = new Log(810,260,20,300,PI/2)
    ground = new Ground(200,height,2000,20)

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220,50,50)
    log3 = new Log(810,180,20,300,PI/2)
}

function draw(){
    background("skyblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    ground.display();
    box3.display();
    box4.display();
    pig2.display();
    log3.display();
    bird.display();
}