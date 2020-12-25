
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving", monkey_running)
monkey.scale = 0.1
  
  
ground = createSprite(400,350,900,10)
  ground.velocityX =-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  fruitGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background(255);
fruits()
spawn()
ground.velocityX = -4;
      score = score + Math.round(frameCount/50);
      if (ground.x < 0){
    ground.x = ground.width/2;
      }
if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
}
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
drawSprites();
  stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 500,50);

 stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("survival Time: "+ survivalTime, 100,50);
}

function fruits(){
 if(frameCount%150===0){

banana=createSprite(400,200,20,20);
banana.y=Math.round(random(120,240));
  banana.addImage(bananaImage);
banana.scale = 0.1
 banana.velocityX = -7;
banana.setLifetime = 150;
fruitGroup.add(banana)
}
}
function spawn(){
if(frameCount%300===0){
rock = createSprite(400,320,900,10)
rock.addImage(obstacleImage)
rock.scale = 0.2;
  rock.velocityX = -8;
  rock.setLifetime = 150;
  obstacleGroup.add(rock)
}
}



