// GAME STATE 
var gameState = "play";

// all variables
var bg , bgImg ;
var gun , gunImg , rocket , rocketImg ;
var enemy1 , enemy1_img , enemy2 , enemy2_img , enemy3 , enemy3_img ;
var iwall_1 , iwall_2 , iwall_3 ;
// groups
var enemy1_g , enemy2_g , enemy3_g , enemy4_g , rocket_g;

////////////////////////////     PRELOAD     ///////////////////////////////

function preload(){
    bgImg = loadImage("bg.jpg");
    gunImg = loadImage("our spaceship.png");
    enemy1_img = loadImage("enemy1.png");
    enemy2_img = loadImage("enemy2.png");
    enemy3_img = loadImage("enemy3.png");
    rocketImg = loadImage("rocket.png");

}

////////////////////////////////     SETUP    /////////////////////////////

function setup(){

createCanvas(700,430);

bg = createSprite(450,215);
bg.addImage(bgImg);
bg.scale = 0.6;
bg.velocityX = 4;

// creating spaceship
gun = createSprite(570,215);
gun.addImage(gunImg);
gun.scale = 0.4;
// gun collider
gun.debug = false;
gun.setCollider("rectangle",0,0,300,300);

// creating invisible walls
iwall_1 = createSprite(350,0,1000,20);
iwall_1.visible = false;

iwall_2 = createSprite(350,430,1000,20);
iwall_2.visible = false;

iwall_3 = createSprite(0,215,20,1000);
iwall_3.visible = false;



// groups
enemy1_g = new Group();
enemy2_g = new Group();
enemy3_g = new Group();
enemy4_g = new Group();
rocket_g = new Group();

if(frameCount % 250 === 0){
    enemy1 = createSprite(-50,Math.round(random(20,400)));
    enemy1.addImage(enemy1_img);
    enemy1.scale = 0.2;
    enemy1.velocityX = 3;

    enemy1.lifetime = 270;

    enemy1_g.add(enemy1);
}



}

//////////////////////////////    DRAW     ////////////////////////////////

function draw(){

background("purple");
for(i = 0 ; i<rocket_g.length ; i = i+1){
    if(enemy1.isTouching(rocket_g.get(i))){

        rocket_g.get(i).destroy();

    }
}
// texts

if(keyDown("space")){
    rocket = createSprite(720,150);
    rocket.addImage(rocketImg);
    rocket.scale = 0.2;
    rocket.velocityX = -8;

    rocket.y = gun.y;
    rocket.x = gun.x;

    rocket_g.add(rocket);
}
 drawSprites();
 
                                                                                                                                   //

if(gameState === "play"){

    // moving background
    if(bg.x>480){
        bg.x = 210
    }

    // colliding gun
    gun.collide(iwall_1);
    gun.collide(iwall_2);

    // moving gun up
    if(keyDown("up")){
        gun.y = gun.y-10;
    }
    if(keyDown("left")){
        gun.y = gun.y-10;
    }
    // moving gun down
    if(keyDown("down")){
        gun.y = gun.y+10;
    }
    if(keyDown("right")){
        gun.y = gun.y+10;
    }

    // destroying missile
    if(rocket_g.isTouching(iwall_3)){
        rocket_g.destroyEach();
    }

    // calling functions
    cRocket();
    c_enemy1();
    c_enemy2();
    c_enemy3();

    // destroying rocket one by one
   



}
}

//#####################################################      FUNCTIONS        ##########################################################                    

function cRocket(){

   
}

function c_enemy1(){
   
}

function c_enemy2(){
    if(frameCount % 300 === 0){
        enemy2 = createSprite(-50,Math.round(random(20,400)));
        enemy2.addImage(enemy2_img);
        enemy2.scale = 0.2;
        enemy2.velocityX = 4;

        enemy2.lifetime = 270;

        enemy2_g.add(enemy2);
    }
}

function c_enemy3(){
    if(frameCount % 201 === 0){
        enemy3 = createSprite(-50,Math.round(random(20,400)));
        enemy3.addImage(enemy3_img);
        enemy3.scale = 0.2;
        enemy3.velocityX = 3;

        enemy3.lifetime = 270;

        enemy3_g.add(enemy3);
    }
}