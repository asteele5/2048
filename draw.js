//Instaniate all variables
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//Pixel width and height of canvas(for CSS)
const rows = 4;
const columns = 4;

//Pixel width and height of canvas(for CSS)
const pxWidth = 600;
const pxHeight = 600;
//Sets width and height of canvas to pixel width and height variables
canvas.style.setProperty('--canvas-width', pxWidth + 'px');
canvas.style.setProperty('--canvas-height', pxHeight + 'px');

const width = 300;
const height = 150;

function drawGrid() {
  var i;
  //Draws rows
  for(i = 1; i < rows; i++){
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "gray";
      ctx.moveTo(0.5, (height/rows)*i);
      ctx.lineTo(width+0.5, (height/rows)*i);
      ctx.stroke();
  }
  // Draws columns
  for(i = 1; i < columns; i++){
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "gray";
      ctx.moveTo((width/rows)*i+0.5, 0);
      ctx.lineTo((width/rows)*i+0.5, height);
      ctx.stroke();
  }
}





//Reocurring loop (runs every 150 ms)
update = window.setInterval(() =>  {
drawGrid();
// ctx.fillRect(50, 50, 50, 50);
console.log(height/rows);

}, 150);
