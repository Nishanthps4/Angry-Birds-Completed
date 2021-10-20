const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg2
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var a=1269;
var bg="sprites/bg.png"
console.log(a);
a = null;
console.log(a);
var c = [1, 2, 3,a,"bc", "def"];
console.log(c[1]);
console.log(c.length)
var y = [[1,2,3],[4,5,6],c,a];
console.log(y)
console.log(y[2][4]);
var x=[89, 95, 98, 80];
var sum=0
for(var I=0;I<=3;I=I+1){
    sum=sum+x[I]
    
}
var gameState="onsling"
var score=0;
console.log(sum)
function preload() {
    dateTime1();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(bg2)
    background(bg2);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    

    textSize(20);
    text("Score - "+score, 1050, 50);

    pig1.score();
    pig3.score();
}

function mouseDragged(){
    //if(gameState!="launch"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//}

}

function mouseReleased(){
    slingshot.fly();
    gameState="launch";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory=[]
      slingshot.attach(bird.body);
        
    }
}

async function dateTime1(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
    var response2=await response.json()
    console.log(response2.datetime);
    var datetime=response2.datetime;
    var hour=datetime.slice(11,13);
    console.log(hour);
    if(hour>=09&&hour<=19){
        bg="sprites/bg.png";
    }
    else{
        bg="sprites/bg2.jpg"
    }
    bg2=loadImage(bg)
}