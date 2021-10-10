
var speed,weight 
var car,wall

function setup() {
  createCanvas(900,400);
  speed=random(55,90);
  weight=random(400,1500);
car=createSprite(55,200,50,50);

car.velocityX=speed 
car.shapeColor="red" 
wall=createSprite(800,200,40,400);
wall.shapeColor="yellow"

}

function draw() {
  background("orange")
  
  
  if(wall.x-car.x < (car.width+wall.width)/2){
car.velocityX=0
var deformation=0.5*speed*weight*speed/22500

if(deformation>180){
  car.shapeColor="black"
}
if(deformation<180 && deformation>100){
  car.shapeColor="purple"
}
if(deformation<100){
  car.shapeColor="brown"
}


  }


  drawSprites();
}