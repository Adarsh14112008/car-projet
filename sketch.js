var car, wall;
var speed, weight;
function setup() {
  createCanvas(800,400);
 car = createSprite(100, 200, 50, 50);
 wall= createSprite(700, 200, 60, 200);
 speed=random(40,100);
 weight=random(500,1500);
 car.velocityX=speed;
}

function draw() {
  background(25,25,25);
  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX=0;
    var defromation=0.5*weight*speed*speed/22509;
    if(defromation>180){
      car.shapeColor= ("red")
      
    }
    if(defromation<180&&defromation>100){
      car.shapeColor=("yellow")
      
    }
    if(defromation<100){
      car.shapeColor= ("green")
      
    }

  }
  drawSprites();
}