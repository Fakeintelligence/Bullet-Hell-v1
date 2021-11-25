var backgroundTop, backgroundBottom, backgroundLeft, backgroundRight, backgroundCenter;
var pm, pb, pl, pr, pt;
var player;
var mobImg;
var safebox;
var X, Y;
var mobY, mobX
function preload() {
backgroundBottom = loadImage("background_bottom.png");
backgroundTop = loadImage("background_top.png");
backgroundLeft = loadImage("background_left.png");
backgroundRight = loadImage("background_right.png");
backgroundCenter = loadImage("background_central.png");
playerImg = loadImage("player.png");
mobImg = loadImage("mob.png");
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

X = 80;
Y = 190;



safebox = createSprite(80, 190, 25, 25);
//safebox.fill();

};

function draw() {
  background('gray');

player = createSprite(X, Y, 10, 10);
player.addImage("p",playerImg);
player.scale = 0.01;

  if(keyDown("d")) {
   X +=1
};
  if(keyDown("w")) {
  Y -=1
};
  if(keyDown("a")) {
  X -=1
};
  if(keyDown("s")) {
  Y +=1
};

console.log(X, Y);

  mobSpawn();
  mobChase();
  drawSprites();
};

function mobChase(){
  if(Y>mobY){
    mobY +=1
  };

  if(Y<mobY){
    mobY -=1
  };

  if(X>mobX){
    mobX +=1
  };

  if(X<mobX){
    mobX -=1
  };
};

function mobSpawn(){
  var mobs = createSprite(mobX, mobY, 10, 10);
  mobY = Math.round(random(100, 200));
  mobX = Math.round(random(100, 200));
  console.log(mobX, mobY)
  mobs.addImage("m", mobImg);
  mobs.scale = 0.01;
}



/*function moveLeft(){
  if(keyDown("space")) {
    player.velocityX +=10
    console.log(player.x)
}

}*/


