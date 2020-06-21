var bgimage;
var mimage;
var mario;
var trex,timage;
var edges;
var bullet,bimage;
var bgsound;
function preload(){
  bgimage = loadImage("background.jpg");
  mimage = loadImage("mario.png");
  timage = loadImage("trex.png");
  bimage = loadImage("bullet.png");
  bgsound = loadSound("darkwds1.mp3")
}
function setup() {
  
  createCanvas(800,600);
  
  mario = createSprite(200, 400, 50, 50);
  mario.addImage("mario",mimage);
  mario.velocityX=3;
  trex = createSprite(600, 200, 50, 50);
  trex.addImage("bird",timage);
  trex.scale=0.5;
  trex.velocityY=-2;
  

  bullet = createSprite(320,360,10,10);
  bullet.addImage("bullet",bimage);
  //bullet.setCollider("rectangle",0,0,10,10);
  bullet.scale=0.1;
 
  edges=createEdgeSprites();
 // if(keyDown("UP_ARROW")){
  //  bullet.velocityX = 10;
 //}
}

function draw() {
  background(bgimage); 
  playsound("bgsound")
  bullet.x=mario.x+80;
  

  if (keyCode === 32) {
    bullet.velocityX = 10;
    bullet.velocityY = Math.round(random(-5,-10));
    
  }
  if(mario.x < 50){
    mario.velocityX = 3;
  }
  if(mario.x > 650){
    mario.velocityX = -3
  }
  if(bullet.y<0){
bullet.x=mario.x;
bullet.y=350;
bullet.velocityY=0;

  }
  if(bullet.isTouching(trex)){
    trex.velocityY=0;
  bullet.velocityY=0;
  trex.collide(edges);
  
  }
  
  drawSprites();
  createEdgeSprites();
  trex.bounceOff(edges);
  mario.bounceOff(edges);
 
}