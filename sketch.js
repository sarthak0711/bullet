var bullet,wall,speed,weight,thickness,s1


function setup() {
  createCanvas(1600,400);
  

speed=random(55,90)
weight=random(400,1500)
thickness=random(22,83)



wall=createSprite(1200,200,thickness,height/2)
wall.visible=true

bullet=createSprite(50,200,50,50)
bullet.velocityX=speed;
bullet.shapeColor=color(80,80,80)

}

function draw() {
  background(255,255,255);  
 
  
if(hasCollided(wall,bullet)){
   bullet.velocityX=0
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
 


}
  
  
  
  drawSprites();
}

function hasCollided(ob1,ob2) {

  if(ob1.x-ob2.x <= ob1.width/2 + ob2.width/2 ){
   
    return true;
} else {
    return false;
 }
}