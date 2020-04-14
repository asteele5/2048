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
const boxWidth = width/rows;
const boxHeight = height/rows;
const col0 = 0;
const col1 = boxWidth;
const col2 = boxWidth*2;
const col3 = boxWidth*3;
const row0 = 0;
const row1 = boxHeight;
const row2 = boxHeight*2;
const row3 = boxHeight*3;
var direction = null;
var tiles = [
  [new Tile(0, 0, 0), new Tile(0, boxWidth, 0), new Tile(2, boxWidth*2, 0), new Tile(0, boxWidth*3, 0)],
  [new Tile(0, 0, boxHeight), new Tile(16, boxWidth, boxHeight), new Tile(8, boxWidth*2, boxHeight), new Tile(0, boxWidth*3, boxHeight)],
  [new Tile(0, 0, boxHeight*2), new Tile(0, boxWidth, boxHeight*2), new Tile(4, boxWidth*2, boxHeight*2), new Tile(0, boxWidth*3, boxHeight*2)],
  [new Tile(0, 0, boxHeight*3), new Tile(0, boxWidth, boxHeight*3), new Tile(0, boxWidth*2, boxHeight*3), new Tile(0, boxWidth*3, boxHeight*3)],
];
console.log(tiles[0][0]);
// tiles[0][1].setX = tiles[0][1].getRealX(1);
// tiles[1][0].setY = tiles[1][0].getRealY(1);
// tiles[2][2].setX = tiles[2][2].getRealX(2);
// tiles[2][2].setY = tiles[2][2].getRealY(2);



function drawGrid() {
  var i;
  //Draws rows
  for(i = 1; i < rows; i++){
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "gray";
      ctx.moveTo(0, (height/rows-0.5)*i+0.5);
      ctx.lineTo(width, (height/rows-0.5)*i+0.5);
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



  window.addEventListener('keydown', ((e) =>{
    if(e.key == 'ArrowUp'){
        Tile.move(tiles, 'UP');
    }
    else if(e.key == 'ArrowDown'){
        Tile.move(tiles, 'DOWN');
    }
    else if(e.key == 'ArrowLeft'){
        Tile.move(tiles, 'LEFT');
    }
    else if(e.key == 'ArrowRight'){
        Tile.move(tiles, 'RIGHT');
    }
  }))

//Reocurring loop (runs every 150 ms)
update = window.setInterval(() =>  {
  ctx.clearRect(0, 0, width, height);
drawGrid();

Tile.drawTiles(tiles);

}, 150);
