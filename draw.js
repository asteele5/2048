//Instaniate all variables
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//Pixel width and height of canvas(for CSS)
const rows = 4;
const columns = 4;

//Pixel width and height of canvas(for CSS)
const pxWidth = 500;
const pxHeight = 500;
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
var xDown = null;
var yDown = null;
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
// console.log('box Width: '+boxWidth);
// console.log('box Height: '+boxHeight);

// var tiles = [
//   [new Tile(0, 0, 0), new Tile(0, boxWidth, 0), new Tile(0, boxWidth*2, 0), new Tile(0, boxWidth*3, 0)],
//   [new Tile(0, 0, boxHeight), new Tile(0, boxWidth, boxHeight), new Tile(0, boxWidth*2, boxHeight), new Tile(0, boxWidth*3, boxHeight)],
//   [new Tile(0, 0, boxHeight*2), new Tile(0, boxWidth, boxHeight*2), new Tile(0, boxWidth*2, boxHeight*2), new Tile(0, boxWidth*3, boxHeight*2)],
//   [new Tile(0, 0, boxHeight*3), new Tile(0, boxWidth, boxHeight*3), new Tile(0, boxWidth*2, boxHeight*3), new Tile(0, boxWidth*3, boxHeight*3)],
// ];
// tiles[0][1].setX = tiles[0][1].getRealX(1);
// tiles[1][0].setY = tiles[1][0].getRealY(1);
// tiles[2][2].setX = tiles[2][2].getRealX(2);
// tiles[2][2].setY = tiles[2][2].getRealY(2);
var tiles = Tile.instaniateTiles();
// console.log(tiles);



function drawGrid() {
  var i;
  //Draws rows
  for(i = 1; i < rows; i++){
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "black";
      // ctx.moveTo(0, (boxHeight-0.5)*i+0.5);
      // ctx.lineTo(width, (boxHeight-0.5)*i+0.5);
      ctx.moveTo(0, (boxHeight)*i);
      ctx.lineTo(width, (boxHeight)*i);
      ctx.stroke();
  }
  // Draws columns
  for(i = 1; i < columns; i++){
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "black";
      ctx.moveTo((boxWidth)*i+0.5, 0);
      ctx.lineTo((boxWidth)*i+0.5, height);
      ctx.stroke();
  }
}

  function endGame() {
    canvas.style.opacity = "0.3";
    window.setTimeout(lostMessage, 250);
  }

  function lostMessage(){
    alert("You lost. Press \"Reset\" to play again.")
  }

  function resetGame(){

    tiles = Tile.instaniateTiles();
    Tile.score = 0;
    canvas.style.opacity = "1";
    update = window.setInterval(runGame, 150);
  }


  function getTouches(evt) {
    return evt.touches ||             // browser API
           evt.originalEvent.touches; // jQuery
  }

  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
  };

  function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
          if ( xDiff > 0 ) {
            Tile.move(tiles, 'LEFT');
          } else {
            Tile.move(tiles, 'RIGHT');
          }
      } else {
          if ( yDiff > 0 ) {
            Tile.move(tiles, 'UP');
          } else {
            Tile.move(tiles, 'DOWN');
          }
      }
      /* reset values */
      xDown = null;
      yDown = null;
  };


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



  function runGame(){
    ctx.clearRect(0, 0, width, height);

    drawGrid();
    Tile.drawTiles(tiles);
    if(Tile.checkFull(tiles)){
      clearInterval(update);
      console.log('end');
      endGame();
    }

    document.getElementById("score").innerHTML = 'Score: '+Tile.score;


  }
//Reocurring loop (runs every 150 ms)
var update = window.setInterval(runGame, 150);
