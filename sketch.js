
function setup() {
  createCanvas(1600, 1200);
  var sprite = createSprite(100,200,100,100)

}

function draw() {
  background("white");

  if(keyIsDown(LEFT_ARROW)){
    sprite.postion.x= sprite.position.x-5; 
  }
  drawSprites();
}