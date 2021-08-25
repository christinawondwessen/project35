//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock

function preload(){
  dog=loadImage("dogImg.png");
  happydog=loadImage("happyDogImg.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,350,40,40);
  happyDog = createSprite(250,350,40,40);
}


function draw() {  
  background(46, 139, 87);
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here
  displayText:"Press Up Arrow To Feed Drago Milk";
  textSize(35);
  fill();
  stroke();
}



