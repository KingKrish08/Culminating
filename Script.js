let playerX; // player's x position
let playerSpeed = 5; // player's speed
let obstacleX, obstacleY; // obstacle's x and y position
let obstacleSpeed = 25; // obstacle's speed
let obstacleWidth = 30; // obstacle's width;
let obstacleHeight = 30; // obstacle's size
let score = 0; // player's starting score
let gameOver = false; // initially tells the code if the game is over
let isHomeScreen = true; // flag to indicate whether it's the home screen or game screen

function setup() {
  createCanvas(windowWidth-20, windowHeight-20);// the canvas

playerX = width / 2;// sets the player's x position at the middle of the screen
obstacleX = random(width - obstacleWidth);// random x position for the obstacle
obstacleY = -obstacleHeight; // obstacle starts at the top of the canvas
}

function draw() {
  if (isHomeScreen) {
// Display home screen
  
background("darkgreen");
fill(255); 
stroke(0)
textFont("Impact")
textSize(32); 
textAlign(CENTER, CENTER); 
text("ACID RAIN", width / 2, height / 2.7); 
textSize(18)
text("Press space to start", width / 2, height / 1.2)
textSize(23)
text("Avoid the falling acid and survive for as long as you can, Good Luck", width / 2, height / 1.6)
text("Use the left and right arrow keys to move" , width / 2, height / 1.4) // the positions, colors, font, and size of the text 

if (keyIsDown(32)) { // Check for space bar press to start the game
  isHomeScreen = false; // Switch to game screen

  }
} 

else { // Display game screen
  background("darkblue");
  if (!gameOver) {

// Move player left
if (keyIsDown(LEFT_ARROW) && playerX > 0) {
  playerX -= playerSpeed;

}
  
// Move player right 
if (keyIsDown(RIGHT_ARROW) && playerX < width - obstacleWidth) {
  playerX += playerSpeed;
}

// Move obstacle
obstacleY += obstacleSpeed;// makes the obstacle fall down the screen

if (obstacleY > height) { // if the obstacle goes off the screen
  obstacleX = random(width - obstacleWidth);// obstacle reappears at the top of the canvas
  obstacleY = -obstacleHeight;// obstacle starts at the top of the canvas
score++; // Increase score when obstacle reaches the bottom of the screen

// Increase speed and number of falling objects every 5 points
if (score % 5 === 0) {
  obstacleSpeed += 0.5;

  }
}

// This is the players character
fill(255);
stroke(255);
line(playerX + 15, height - 50, playerX + 15, height - 80); // Body
line(playerX + 5, height - 70, playerX + 15, height - 80); // Left arm
line(playerX + 15, height - 80, playerX + 25, height - 70); // Right arm
line(playerX + 15, height - 50, playerX + 5, height - 40); // Left leg
line(playerX + 15, height - 50, playerX + 25, height - 40); // Right leg
ellipse(playerX + 15, height - 93, 20, 20); // Head

// This is the obstacle
fill(143,254,9);
ellipse(obstacleX, obstacleY, obstacleWidth, obstacleHeight);

// This shows the score
stroke(0)
fill(255);
textSize(16);
textAlign(LEFT);
text("Score: " + score, 10, 20);

// Check for collision
if (obstacleY + obstacleHeight >= height - 50 && obstacleX + obstacleWidth >= playerX && obstacleX <= playerX + 30) { // If the obstacle is below the player and overlapping
gameOver = true;//       
  }
} 

else {
// Game over screen
background("darkblue");
fill("red");
textSize(32);
textAlign(CENTER);
text("Game Over", width / 2, height / 2);
textSize(16);
text("Score: " + score, width / 2, height / 2 + 30);
text("Press the space bar to restart", width / 2, height / 2 + 60);  
  
// Checks if the space bar is pressed
if (keyIsDown(32)) {

// Resets the positions of the objects and player
  playerX = width / 2;// sets the player's x position at the middle of the screen
  obstacleX = random(width - obstacleWidth);// obstacle reappears at the top of the canvas at a random x position
  obstacleY = -obstacleHeight;// obstacle starts at the top of the canvas
  score = 0;// Reset score
  obstacleSpeed = 25; // Reset obstacle speed
  gameOver = false;// Reset game over state
      }
    }
  }
}
