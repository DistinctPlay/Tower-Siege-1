var ground, slab, slab2;
var box1, box2, box3, box4, box5, box6, box7, box8;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(400,390,900,10);
  slab = new Ground(600,200,200,10);
  slab2 = new Ground(675,100,200,10);

  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);

  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}