import './style.css';
import Ball from "./model/Ball.js";
import Paddle from "./model/Paddle.js";

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
let gameGoing = true;
function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  blueBall.draw(ctx);
  paddle.draw(ctx);

  blueBall.move();
  paddle.move(canvas.width);
  blueBall.collide(paddle);
  gameGoing = blueBall.bounce(canvas.width, canvas.height);
  if (gameGoing) {
    window.requestAnimationFrame(draw);
  } else {
    window.alert("Game Over!");
  }
}

draw();