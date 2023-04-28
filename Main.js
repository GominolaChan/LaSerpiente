var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var snake = [{x: 0, y: 0}];
var direction = "right";

function drawSnake() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000000";
  for (var i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
  }
}

function moveSnake() {
  var head = {x: snake[0].x, y: snake[0].y};
  if (direction === "right") head.x += 10;
  else if (direction === "left") head.x -= 10;
  else if (direction === "up") head.y -= 10;
  else if (direction === "down") head.y += 10;
  snake.unshift(head);
  snake.pop();
}

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 39 && direction !== "left") direction = "right";
  else if (event.keyCode === 37 && direction !== "right") direction = "left";
  else if (event.keyCode === 38 && direction !== "down") direction = "up";
  else if (event.keyCode === 40 && direction !== "up") direction = "down";
});

setInterval(function() {
  moveSnake();
  drawSnake();
}, 100);