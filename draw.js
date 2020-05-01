const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
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
var direction = null;
var tiles = Tile.instaniateTiles();


function drawGrid() {
  var i;
  //Draws rows
  for(i = 1; i < rows; i++){
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "black";
      if(i == 2){
        ctx.moveTo(0, (boxHeight)*i+.5);
        ctx.lineTo(width, (boxHeight)*i+.5);
      }
      else{
        ctx.moveTo(0, (boxHeight)*i);
        ctx.lineTo(width, (boxHeight)*i);
      }
      ctx.stroke();
  }
  // Draws columns
  for(i = 1; i < columns; i++){
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "black";
      ctx.moveTo((boxWidth)*i, 0);
      ctx.lineTo((boxWidth)*i, height);
      ctx.stroke();
  }
}

  function endGame() {
    canvas.style.opacity = "0.3";
    window.setTimeout(function(){alert("You lost. Press \"Reset\" to play again.");}, 250);
  }

  function resetGame(){

    tiles = Tile.instaniateTiles();
    Tile.score = 0;
    canvas.style.opacity = "1";
    update = window.setInterval(runGame, 150);
  }


//FOR MOBILE USERS, DOESN'T WORK

// var touchstartX = 0;
// var touchstartY = 0;
// var touchendX = 0;
// var touchendY = 0;
//
// const gestureZone = canvas;
//
// gestureZone.addEventListener('touchstart', function(event) {
//     touchstartX = event.changedTouches[0].screenX;
//     touchstartY = event.changedTouches[0].screenY;
// }, false);
//
// gestureZone.addEventListener('touchend', function(event) {
//     touchendX = event.changedTouches[0].screenX;
//     touchendY = event.changedTouches[0].screenY;
//     handleGesture();
// }, false);
//
// function handleGesture() {
//     if (touchendX < touchstartX) {
//         console.log('Swiped left');
//         Tile.move(tiles, 'LEFT');
//
//     }
//
//     if (touchendX > touchstartX) {
//         console.log('Swiped right');
//         Tile.move(tiles, 'RIGHT');
//
//     }
//
//     if (touchendY < touchstartY) {
//         console.log('Swiped up');
//         Tile.move(tiles, 'UP');
//
//     }
//
//     if (touchendY > touchstartY) {
//         console.log('Swiped down');
//         Tile.move(tiles, 'DOWN');
//
//     }
//
//     if (touchendY === touchstartY) {
//         console.log('Tap');
//     }
// }


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
      window.clearInterval(update);
      console.log('end');
      endGame();
    }

    document.getElementById("score").innerHTML = 'Score: '+Tile.score;


  }
//Reocurring loop (runs every 150 ms)
var update = window.setInterval(runGame, 150);
