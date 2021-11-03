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

clearButton.addEventListener('click', clearCanvas);

greenButton.addEventListener('click', placeGreen);
pinkButton.addEventListener('click', placePink);

/*
*   start/draw/stop combine to provide the actual drawings functionality.
*/
function start(e){
  isDrawing = true;
  draw(e);
}
function draw({clientX: x, clientY: y}){
  var bounds = canvas.getBoundingClientRect();

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

/*
*   Clear the drawings on the map.
*/
function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/*
*   Place a green ward on the map.
*/
function placeGreen(){
  var tag = document.createElement("div");
  tag.id = "item-green";
  var element = document.getElementById("container");
  element.appendChild(tag);
}

/*
*   Place a pink ward on the map.
*/
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

/*
*   dragStart/dragEnd/drag combine to provide the functionality of
*   dragging the green/pink wards.
*/
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
        activeItem.initialX = e.clientX - activeItem.xOffset;
        activeItem.initialY = e.clientY - activeItem.yOffset;
      }
    }
  }
}
function dragEnd(e) {
  // If the item is dragged into the deletion bin, remove it
  if (activeItem.currentX < -449 && activeItem.currentY < -291){
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