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
  x = x - bounds.x;
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
  var tag = document.createElement("div");
  tag.id = "item-green";
  var element = document.getElementById("container");
  element.appendChild(tag);
}

function placePink(){
  var tag = document.createElement("div");
  tag.id = "item-pink";
  var element = document.getElementById("container");
  element.appendChild(tag);
}


// Draggable element code:
// https://www.kirupa.com/html5/drag.htm

var container = document.querySelector("#container");
var activeItem = null;

var active = false;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {

  if (e.target !== e.currentTarget) {
    active = true;

    // this is the item we are interacting with
    activeItem = e.target;

    if (activeItem !== null) {
      if (!activeItem.xOffset) {
        activeItem.xOffset = 0;
      }

      if (!activeItem.yOffset) {
        activeItem.yOffset = 0;
      }

      if (e.type === "touchstart") {
        activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
        activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
      } else {
        console.log("doing something!");
        activeItem.initialX = e.clientX - activeItem.xOffset;
        activeItem.initialY = e.clientY - activeItem.yOffset;
      }
    }
  }
}

function dragEnd(e) {
  console.log("X: ", activeItem.currentX);
  console.log("Y: ", activeItem.currentY);

  if (activeItem.currentX < -449 && activeItem.currentY < -291){
    console.log("DELETE");
    activeItem.remove();
  }
  if (activeItem !== null) {
    activeItem.initialX = activeItem.currentX;
    activeItem.initialY = activeItem.currentY;
  }

  active = false;
  activeItem = null;
}

function drag(e) {

  if (active) {

    // Don't drag if it is the map
    if (activeItem.id == "map-canvas" || activeItem.id == "square"){
      console.log(activeItem.id);
      return;
    }

    if (e.type === "touchmove") {
      e.preventDefault();

      activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
      activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
    } else {
      activeItem.currentX = e.clientX - activeItem.initialX;
      activeItem.currentY = e.clientY - activeItem.initialY;
    }

    activeItem.xOffset = activeItem.currentX;
    activeItem.yOffset = activeItem.currentY;

    setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}