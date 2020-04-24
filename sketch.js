 const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stick1;

function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;


  gate = new gate (500,570,70,150);
  stick1 = new sticks (500,450,100,450);
  stick2 = new sticks (397,450,100,360);
  stick3 = new sticks (603,450,100,360);
  stick4 = new sticks (294,450,100,550);
  stick5 = new sticks (706,450,100,550);
  stick6 = new sticks (850,450,50,850);
  stick7 = new sticks (150,450,50,850);
}

function draw(){
    background("black");

    Engine.update(engine);


    
    fill("blue");
    triangle(500,60,551,230,449,230);
   
    fill("green");
    triangle(297,30,242,180,345.3,180);
    
    triangle(705,30,654.6,180,757,180);


    
       stick7.display();
       stick6.display();
       stick5.display();
       stick4.display();
       stick3.display();
       stick2.display();
       stick1.display();
       gate.display();
      
}