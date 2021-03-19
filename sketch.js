const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,fairy,star,starimage,fairymoving,fairyImage,joyMusic,background1;



function preload()
{
   //preload the images here

   fairymoving=loadImage("images/fairy1.png","images/fairy2.png")
   fairyImage=loadImage("images/fairy.png")
   starimage=loadImage("images/star.png")
   background1=loadImage("images/starnight.png")
   joyMusic=loadImage("sound/joyMusic.mp3")
}

function setup() {
   createCanvas(500, 500);
   engine=Engine.create();

   world=engine.world;

   var fairy_option={
      isStatic:true
   }

   
   
   fairy = Bodies.rectangle(50,350,40,40,fairy_option)
   fairy.addImage(fairyImage);
   World.add(world,fairy)
   
   
   

   background(0)



}


function draw() {

   

   Engine.update(engine);
   rect(fairy.position.x,fairy.position.y,40,40)


  

}
