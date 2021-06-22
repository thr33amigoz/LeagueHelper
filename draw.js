const clearButton = document.querySelector('.clear');
const greenButton = document.querySelector('.green-ward');
const pinkButton = document.querySelector('.pink-ward');
const stroke_weight = document.querySelector('.stroke-weight');
const color_picker = document.querySelector('.color-picker');

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.width = 1200;
canvas.height = 900;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

canvas.addEventListener('mousewheel', scroll_func);
/*
var drawCanvas = document.createElement('CANVAS');
var drawCtx = drawCanvas.getContext('2d');
drawCtx.fillStyle = "#FF0000";
drawCtx.fillRect(500, 500, 550, 500);

drawCanvas.width = canvas.width;
drawCanvas.height = canvas.height;

document.getElementById('newCanvas').appendChild(drawCanvas);
*/
function scroll_func(opt){
  
  //console.log(opt.offsetX, canvas.width);
  //console.log(opt.offsetY, canvas.height);
  /*console.log("zoom");

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.width);
  ctx.save();
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.width / 2);
  ctx.scale(.5, .5);
  ctx.drawImage(drawCanvas, -ctx.canvas.width / 2, -ctx.canvas.width / 2);
  ctx.restore();
  */
};


clearButton.addEventListener('click', clearCanvas);

greenButton.addEventListener('click', placeGreen);
pinkButton.addEventListener('click', placePink);

function start(e){
  isDrawing = true;
  draw(e);
}

function draw({clientX: x, clientY: y}){
  //console.log(x, y);
  var bounds = canvas.getBoundingClientRect();
  //console.log(bounds);
  y = y - bounds.y;
  x = x - ctx.canvas.offsetLeft;
  if (!isDrawing) return;
  ctx.lineWidth = stroke_weight.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = color_picker.value;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function stop(){
  isDrawing = false;
  ctx.beginPath();
}

function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
/*
window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //canvas.width = 1200;
  //canvas.height = 900;
  //console.log(canvas.width);
  //console.log(canvas.height);
}
resizeCanvas();
*/

function placeGreen(){
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke(); 
}

function placePink(){
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke(); 
}

var dragItem = document.querySelector("#item");
var container = document.querySelector("#container");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {
  
    e.preventDefault();
  
    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}