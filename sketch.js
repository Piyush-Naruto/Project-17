
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var obstacle;
var score=0;
var monkey_running;
var survivalTime=0;
var gameState=0;
var PLAY =0;
var END = 1;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10); 
  ground.velocityX=4;
  ground.x = ground.width/2;
  
  foodGroup = createGroup;
  obstacleGroup = createGroup;

}

function draw(){  
  background("white")

  ground.x = ground.width/2; 
  console.log(ground.x); 
  
  if(keyDown("space") && monkey.y >=250) {
    monkey.velocityY = -12;}
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground); 
  monkey.debug=false;
  
  food();
  obstacles();
  
  drawSprites();

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVALTIME:"+ survivalTime,100,50);
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(400,200,30,30);
    banana.y = Math.round(random(120,200));
    banana.velocityX=-10;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime = 200;
   
  }}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(300,320,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.VelocityX=-8;
    obstacle.scale=0.2;
    obstacle.velocityX=-8
    obstacle.debug=false;
  
    if(monkey.isTouching(obstacle)){
    banana.velocityX=0;
    ground.velocityX=0;
    obstacle.velocityX=0;}}}