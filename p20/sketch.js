var car,wall;
var speed,weight;

function setup() {

  canvas = createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.color(80,80,80);
}


function draw() {
  background(255,255,255);  
  rect(200,200,50,50);

}