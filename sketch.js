var stick1,stick2,stick3,stick4,stick5
function setup() {
  createCanvas(800,400);
  stick1 = new Wall(350,390,880,10,PI/2)
  stick2 = new Wall(350,370,80,10,PI/7)
  stick3 = new Wall(390,390,80,10,PI/2)
  stick4 = new Wall(380,380,80,10,PI)
  stick5 = new Wall(390,370,80,10,PI/2)
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  World.add(world, this.body);
  drawSprites();
}