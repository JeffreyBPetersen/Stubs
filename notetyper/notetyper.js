// draw staff lines within the given coordinates
function drawStaff(xStart, yStart, width){
  context.beginPath();
  for(var i = 0; i < 5; i++){
    context.moveTo(xStart, yStart + i*scale);
    context.lineTo(xStart + width, yStart + i*scale);
  }
  context.stroke();
}

// draw both staves positioned together
// total height is scale*10
function drawStaves(xStart, yStart, width){
  drawStaff(xStart, yStart, width);
  drawStaff(xStart, yStart+scale*6, width);
}

// draw a note centered at the given xPos at the corresponding staff position
// staff positions start centered at the top staff line,
//  each increment of staffPos moves down by 1 note
function drawNote(xPos, staffPos){
  context.beginPath();
  context.arc(stavesX + xPos, stavesY + staffPos*scale/2, noteRadius, 0, 2*Math.PI);
  context.fill();
}

function main(){
  console.log("Welcome to Notetyper!");

  canvas = document.getElementById("gameCanvas");
  canvas.width = 640;
  canvas.height = 480;
  context = canvas.getContext("2d");
  // sizes graphical elements, based on pixels between staff lines
  scale = 20;
  noteRadius = scale*3/8;
  // left side of staves
  stavesX = canvas.width/8;
  // top of staves
  stavesY = canvas.height/4;
  // width of staves
  stavesWidth = canvas.width*3/4;
  context.fillStyle = "#000000";

  drawStaves(stavesX, stavesY, stavesWidth);
  drawNote(noteRadius, 1);
}
