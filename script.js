// Canvas Mouse Over Challenge

// Setup Canvas and Graphics Context
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Global Variables
let rectX = 200;
let rectY = 300;
let cirX = 400;
let cirY = 330;
let mousex, mousey;



document.addEventListener("mousemove", mousemovehandler)

function mousemovehandler(event) {
    let cnvrect = cnv.getBoundingClientRect();

    mousex = Math.round(event.clientX - cnvrect.left)
    mousey = Math.round(event.clientY - cnvrect.top)
    
    console.log(mousex, mousey)
}


window.addEventListener("load", draw);

function draw() {
  
  // DRAWING
  // Draw Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Rectangle
  ctx.fillStyle = "white";
  ctx.fillRect(rectX, rectY, 70, 50);

  ctx.fillStyle = "white"
  ctx.beginPath();
  ctx.arc(cirX, cirY, 30, 0, 2 * Math.PI)
  ctx.fill();

  if (mousex <= rectX + 70 && mousex >= rectX && mousey >= rectY && mousey <= rectY + 300){

    rectX += Math.random() * 10 - 5;
    rectY += Math.random() * 10 - 5

    // Draw Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  
    // Draw Rectangle
    ctx.fillStyle = "red";
    ctx.fillRect(rectX, rectY, 70, 50);
  
    ctx.fillStyle = "white"
    ctx.beginPath();
    ctx.arc(cirX, cirY, 30, 0, 2 * Math.PI)
    ctx.fill();
    } else if (mousex <= cirX + 30 && mousex >= cirX - 30 && mousey <= cirY + 30 && mousey >= cirY - 30){

    cirX += Math.random() * 10 - 5;
    cirY += Math.random() * 10 - 5;
    // Draw Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
          
    // Draw Rectangle
    ctx.fillStyle = "white";
    ctx.fillRect(rectX, rectY, 70, 50);
          
    ctx.fillStyle = "blue"
    ctx.beginPath();
    ctx.arc(cirX, cirY, 30, 0, 2 * Math.PI)
    ctx.fill();
}
    

  // Tell draw to run again at 60FPS
  requestAnimationFrame(draw);
}


