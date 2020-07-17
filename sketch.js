const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var dustbinImg,dustbin;

function preload(){
    dustbinImg = loadImage("dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);
    paper = new Paper();

    dustbin = createSprite(964,520,20,20);
    dustbin.addImage(dustbinImg);
    dustbin.scale = 0.55;

    dustbinPart1 = new Dustbin(902,505,10,120);
    dustbinPart2 = new Dustbin(962,565,130,10);
    dustbinPart3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background("red");
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    
    
    paper.display();
    dustbinPart1.display();
    dustbinPart2.display();
    dustbinPart3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:74,y:-75});
    }
}
