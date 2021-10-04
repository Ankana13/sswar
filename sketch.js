
var bg1,as,s,Welcome;
var pGroup,dragon ;
var coinGroup,starGroup;
var bg1_img,r_img,s_img;
var p1,p2,c2,c1;
var gameState = 0;
var form,game,bg;
var boy,boyI,scoin,scoin2;
var earth,eI,b1,b2,b3,b4,b5;
var counter = 0;
var Score = 0;
var sbutton,bg_img2,rocket_img,rocket ;
function preload(){
  bg1_img = loadImage("G.jpg");
  s_img = loadImage("space2.jpg");
  p1 = loadImage("Obs.png");
  p2 = loadImage("Obs2.png");
  c2 = loadImage("coin.png");
  c1 = loadImage("star.png");
  boyI = loadAnimation("b1.png","b2.png","b3.png");
  eI = loadImage("earth.png");
  Welcome = loadImage("Welcome page.jpg")
 bg_img2 = loadImage("bgggg.jpg");
 rocket_img = loadImage("rocket.png");
 b1 = loadImage("astriod1.png");
b2 = loadImage("m2.png");
b3 = loadImage("monster.png");
b4 = loadImage("astriod4.png");
b5 = loadImage("m3.png");
scoin = loadImage("gold.png");
scoin2 = loadImage("love.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 // s = createSprite(0, 0, 400, 400);
game = new Game();
game.start();

form = new Form();
 //s.addImage(s_img);
  bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
 bg.addImage(s_img);
// bg.scale = 25;
 bg.visible = false;
 boy = createSprite(100,100,100,100);
 boy.addAnimation("boyI",boyI);
 boy.visible = false;
 boy.setCollider("circle",0,0,100);
 boy.scale = 0.8;
 
 earth = createSprite(50,height-20,250,200);
 earth.addImage(eI);
 earth.scale = 1.2;
 earth.visible = false;
 earth.setCollider("rectangle",0,0,200,200);

 rocket = createSprite(150,300,500,500);
 rocket.addImage(rocket_img);
 rocket.visible = false;
 rocket.scale = 1.5;
  
 pGroup = new Group();
coinGroup = new Group();
starGroup = new Group();
 //sbutton = createSprite(200,200,100,50);

 
}

function draw() {
  background("black")
  if(gameState === 0){
    form.display();
    background(Welcome);
  
    
  }
 
 if(gameState === 1){
  // background(s_img);
  
  background(bg1_img);
 
 }
 if(gameState === 2){
   background(s_img);
   form.hide();
  game.play();
 }
if(gameState === 3 ){
  background(bg_img2);
 game.secondplay();
}
 console.log(gameState);
  drawSprites();
  textSize(30);
  fill("Yellow");

  text(Score,850,80);

}
function getTime(){
  var response =await fetch( "http://worldtimeapi.org/api/timezone/Asia/Tokyo ");
  var responseJSON = await responsejson();
  console.log(responseJSON);
}