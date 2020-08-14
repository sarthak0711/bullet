var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(300,400,50,50);
  rect1.shapeColor="red"
  rect1.velocityX=3

  rect2=createSprite(800,400,50,50);
  rect2.shapeColor="red"
  rect2.velocityX=-3

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(fixedRect,movingRect);
  bounceOff(rect1,rect2);
 
 if(isTouching(movingRect,fixedRect)){
     movingRect.shapeColor="blue"
     fixedRect.shapeColor="blue"
    
 }else{
   movingRect.shapeColor="green"
   fixedRect.shapeColor="green"
 }

  drawSprites();
}


