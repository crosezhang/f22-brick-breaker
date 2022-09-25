import './style.css';
import Ball from "./model/Ball.js";
import Paddle from "./model/Paddle.js";
import Brick from "./model/Brick.js";

let gameGoing = true;
let score = 0;

const canvas = 
  document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const blueBall = new Ball(
  canvas.width/2,
  canvas.height/2,
  10, 
  10, 
  "blue",
  2,
  -2
);

const paddle = new Paddle(
  canvas.width / 2,
  canvas.height - 10,
  80, 
  10, 
  "blue"
);

const brickRowCount = 3;
const brickColumnCount = 5;
const bricks = [];
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

for (let c = 0; c < brickColumnCount; c++) {
  for (let r = 0; r < brickRowCount; r++) {
    let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
    let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
    bricks.push(new Brick(brickX, brickY, brickWidth, brickHeight, "#0095DD"));
  }
}


function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);


  blueBall.draw(ctx);
  paddle.draw(ctx);
  bricks.forEach((brick) => {
    brick.draw(ctx);
    if (brick.collide(blueBall)) {
      score++;
    }
  });  


  blueBall.move();
  paddle.move(canvas.width);
  blueBall.collide(paddle);
  gameGoing = blueBall.bounce(canvas.width, canvas.height);
  if (gameGoing) {
    if (score == brickRowCount * brickColumnCount) {
      window.alert("You won!");
    } else {
      window.requestAnimationFrame(draw);
    }
  } else {
    window.alert("Game Over!");
  }
}

draw();