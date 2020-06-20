const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;
var bg = "sprites/bb.png";

function preload() {
    backgroundImage = loadImage("sprites/bb.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    ball = new Ball(350,140,380,140);

    basket = new Basket(1035,150,150,150);

    player = new Player(200,300,124,215);

    hoop = new Hoop(1180,210,160,400);

    slingshot = new SlingShot(ball.body,{x:350, y:140});
}

function draw(){
    if(backgroundImage){
    background(backgroundImage);
    }
     fill("white");

     text("if you throw the ball above the basket then you will win otherwise try again by pressing the space bar",150,50);
     textSize(20);
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    slingshot.display();
    ball.display();  
    basket.display();
    hoop.display();
    player.display();
    
    
     
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(ball.body);
    }
}
