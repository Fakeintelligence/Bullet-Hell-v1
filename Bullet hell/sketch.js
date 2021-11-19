var backgroundTop, backgroundBottom, backgroundLeft, backgroundRight, backgroundCenter;
var pm, pb, pl, pr, pt;
var player;
var mob;
var safebox;
function preload() {
backgroundBottom = loadImage("background_bottom.png");
backgroundTop = loadImage("background_top.png");
backgroundLeft = loadImage("background_left.png");
backgroundRight = loadImage("background_right.png");
backgroundCenter = loadImage("background_central.png");
playerImg = loadImage("player.png");
};

function setup() {
createCanvas(260, 260);
pm = createSprite(100, 100, 70, 70);
pm.addImage("bc",backgroundCenter);
pm.scale = 0.27;

pb = createSprite(100, 170, 70, 70);
pb.addImage("bb",backgroundBottom);
pb.scale = 0.27;

pl = createSprite(30, 100, 70, 70);
pl.addImage("bl",backgroundLeft);
pl.scale = 0.27;

pr = createSprite(170, 100, 70, 70);
pr.addImage("br",backgroundRight);
pr.scale = 0.27;

pt = createSprite(100, 30, 70, 70);
pt.addImage("bt",backgroundTop);
pt.scale = 0.27;

safebox = createSprite(80, 190, 25, 25);
//safebox.fill();

player = createSprite(80, 190, 10, 10);
player.addImage("p",playerImg);
player.scale = 0.01;




};

function draw() {
  background('gray');

  if(keyDown("space")) {
    player.y +=10;
    console.log("space key pressed")
}

console.log(player.x, player.Y)

  drawSprites();
};





/*function moveLeft(){
  if(keyDown("space")) {
    player.velocityX +=10
    console.log(player.x)
}

}*/


