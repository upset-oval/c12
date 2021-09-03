var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg =loadImage("apple.png")
  OrangeImg = loadImage("orangeLeaf.png")
  redImage = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
var select_sprites = Math.round(random(1,3))

if (frameCount % 80 == 0){
  if (select_sprites == 1){
    createApples()
  }
  else if(select_sprites===2){
    createOrange()
  }
  else{
    createRed
  }
}
  drawSprites();
}
function createApples(){
  apple=createSprite(random(50, 350),40,10,10);
apple.addImage(appleImg)
apple.scale = 0.07
apple.velocityY=3
apple.lifeTime=250
}
function createOrange(){
  Orange=createSprite(random(50, 350),40,10,10);
  Orange.addImage(OrangeImg)
Orange.scale = 0.07
Orange.velocityY=3
Orange.lifeTime=250
}
function createRed(){
  red=createSprite(random(50, 350),40,10,10);
  red.addImage(redImg)
  red.scale = 0.07
  red.velocityY=3
  red.lifeTime=250
}