class Tile{

  constructor(value, x, y){
    this.value = value;
    this.x = x;
    this.y = y;
    // this.image = new Image();
    // this.image.src = "C:/\\Users/\\mrswa/\\2048-Game/\\2048/\\Images/\\number"+this.value+".png";

  }

  static score = 0;



  static drawTiles(tiles){
    var i;
    var j;
    for(i = 0; i < tiles.length; i++){
      for(j = 0; j < tiles[0].length; j++){
        if(tiles[i][j].getValue !== 0){
          ctx.beginPath();
          if(tiles[i][j].getValue == 2) ctx.fillStyle = "#cfbcbc";
          if(tiles[i][j].getValue == 4) ctx.fillStyle = "#397adb";
          if(tiles[i][j].getValue == 8) ctx.fillStyle = "#db6f35";
          if(tiles[i][j].getValue == 16) ctx.fillStyle = "#e6cd15";
          if(tiles[i][j].getValue == 32) ctx.fillStyle = "#f00ec6";
          if(tiles[i][j].getValue == 64) ctx.fillStyle = "#0ef0d2";
          if(tiles[i][j].getValue == 128) ctx.fillStyle = "#0ef08a";
          if(tiles[i][j].getValue == 256) ctx.fillStyle = "#160ef0";
          if(tiles[i][j].getValue == 512) ctx.fillStyle = "#8f610b";
          if(tiles[i][j].getValue == 1024) ctx.fillStyle = "#f79797";
          if(tiles[i][j].getValue == 2048) ctx.fillStyle = "#f20707";
          ctx.fillRect(tiles[i][j].getX+1, tiles[i][j].getY-0.5, boxWidth-0.5, boxHeight);

          ctx.font = 19.5 + "px Arial";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.fillText(tiles[i][j].getValue.toString(), tiles[i][j].getX+34.5, tiles[i][j].getY+23.5);

          // else{
            // var tile = new Image();
            // tile.src = "C:/\\Users/\\mrswa/\\2048-Game/\\2048/\\Images/\\number"+tiles[i][j].getValue+".png";
            // ctx.drawImage(tile, tiles[i][j].getX+1, tiles[i][j].getY+0.5, boxWidth-.5, boxHeight-1.5);
          // }
        }
      }
    }
  }

  static instaniateTiles(){
    var tiles = [];
    var i;
    var j;
    for(i = 0; i < rows; i++){
      tiles.push(new Array(columns));
    }
    for(i = 0; i < tiles.length; i++){
      for(j = 0; j < tiles[0].length; j++){
        tiles[i][j] = new Tile(0, this.getRealX(j), this.getRealY(i));
      }
    }
    var row1 = parseInt(Math.random()*tiles.length);
    var col1 = parseInt(Math.random()*tiles[0].length);
    tiles[row1][col1].setValue = 2;
    var row2 = parseInt(Math.random()*tiles.length);
    var col2 = parseInt(Math.random()*tiles[0].length);
    while(row1 == row2 && col1 == col2){
      row2 = parseInt(Math.random()*tiles.length);
      col2 = parseInt(Math.random()*tiles[0].length);
    }
    tiles[row2][col2].setValue = 2;

    // tiles[0][0].setValue = 2;
    // tiles[0][1].setValue = 4;
    // tiles[0][2].setValue = 8;
    // tiles[0][3].setValue = 16;
    // tiles[1][0].setValue = 32;
    // tiles[1][1].setValue = 64;
    // tiles[1][2].setValue = 128;
    // tiles[1][3].setValue = 256;
    // tiles[2][0].setValue = 512;
    // tiles[2][1].setValue = 1024;
    // tiles[2][2].setValue = 2048;

    return tiles;
  }

  static move(tiles, direction){
    var i;
    var j;
    var move = false;
    // score++;
          var numi = i;
          var numj = j;
          //FIX

          if(direction == 'UP'){
            for(j = 0; j < tiles.length; j++){
              for(i = 0; i < tiles.length; i++){

                if(tiles[i][j].getValue !== 0){

                  var row = i;

                  while(row > 0){

                    if(tiles[row-1][j].getValue == 0){
                      tiles[row-1][j].setValue = tiles[row][j].getValue;
                      tiles[row][j].setValue = 0;
                      row--;
                      move = true;
                    }
                    else if(tiles[row-1][j].getValue == tiles[row][j].getValue){
                      tiles[row-1][j].setValue = (tiles[row][j].getValue)*2;
                      this.score += tiles[row-1][j].getValue;
                      tiles[row][j].setValue = 0;
                      move = true;
                    }
                    else {
                      break;
                    }
                  }
                }
            }
          }
        }
          else if(direction == 'DOWN'){
            for(j = 0; j < tiles.length; j++){
              for(i = tiles.length-1; i >= 0; i--){
                if(tiles[i][j].getValue !== 0){
                  var row = i;
                  while(row < tiles.length-1){
                    if(tiles[row+1][j].getValue == 0){
                      tiles[row+1][j].setValue = tiles[row][j].getValue;
                      tiles[row][j].setValue = 0;
                      row++;
                      move = true;
                    }
                    else if(tiles[row+1][j].getValue == tiles[row][j].getValue){
                      tiles[row+1][j].setValue = (tiles[row][j].getValue)*2;
                      this.score += tiles[row+1][j].getValue;
                      tiles[row][j].setValue = 0;
                      move = true;
                    }
                    else {
                      break;
                    }
                  }
                }
            }
            }          }
          else if(direction == 'RIGHT'){
            for(i = 0; i < tiles.length; i++){
              for(j = tiles.length-1; j >= 0; j--){
                if(tiles[i][j].getValue !== 0){
                  var col = j;
                  while(col < tiles.length-1){
                    if(tiles[i][col+1].getValue == 0){
                      tiles[i][col+1].setValue = tiles[i][col].getValue;
                      tiles[i][col].setValue = 0;
                      col++;
                      move = true;
                    }
                    else if(tiles[i][col+1].getValue == tiles[i][col].getValue){
                      tiles[i][col+1].setValue = (tiles[i][col].getValue)*2;
                      this.score += tiles[i][col+1].getValue;
                      tiles[i][col].setValue = 0;
                      move = true;
                    }
                    else {
                      break;
                    }                  }
                }
              }
            }
          }
          else if(direction == 'LEFT'){
            for(i = 0; i < tiles.length; i++){
              for(j = 0; j < tiles.length; j++){
                if(tiles[i][j].getValue !== 0){

                  var col = j;
                  while(col > 0){

                    if(tiles[i][col-1].getValue == 0){
                      tiles[i][col-1].setValue = tiles[i][col].getValue;
                      tiles[i][col].setValue = 0;
                      col--;
                      move = true;
                    }
                    else if(tiles[i][col-1].getValue == tiles[i][col].getValue){
                      tiles[i][col-1].setValue = (tiles[i][col].getValue)*2;
                      this.score += tiles[i][col-1].getValue;
                      tiles[i][col].setValue = 0;
                      move = true;
                    }
                    else {
                      break;
                    }
                  }


                }
              }
            }
        }
        console.log('move: '+move);
        if(move)
        this.generateRandomTile(tiles);
  }

  static generateRandomTile(tiles){
    var emptyTileRows = [];
    var emptyTileColumns = [];
    var i;
    var j;
    for(i = 0; i < tiles.length; i++){
      for(j = 0; j < tiles.length; j++){
        if(tiles[i][j].getValue == 0){
          emptyTileRows.push(i);
          emptyTileColumns.push(j);
        }
      }
    }
    var row = emptyTileRows[parseInt(Math.random()*emptyTileRows.length)];
    var col = emptyTileColumns[parseInt(Math.random()*emptyTileColumns.length)];
    while(tiles[row][col].getValue !== 0){
      var row = emptyTileRows[parseInt(Math.random()*emptyTileRows.length)];
      var col = emptyTileColumns[parseInt(Math.random()*emptyTileColumns.length)];
    }
      tiles[row][col].setValue = 2;
  }

  static checkFull(tiles){
    var i;
    var j;
    for(i = 0; i < tiles.length; i++){
      for(j = 0; j < tiles.length; j++){
        if(tiles[i][j].getValue == 0){
          return false;
        }
      }
    }
    return true;
  }



  static getRealX(num){
    if(num == 0){
      return 0;
    }
    else if(num == 1){
      return boxWidth;
    }
    else if(num == 2){
      return boxWidth*2;
    }
    else{
      return boxWidth*3;
    }

  }

  static getRealY(num){
    if(num == 0){
      return 0;
    }
    else if(num == 1){
      return boxHeight;
    }
    else if(num == 2){
      return boxHeight*2;
    }
    else{
      return boxHeight*3;
    }

  }

  get getX(){
    return this.x;
  }

  get getY(){
    return this.y;
  }

  set setX(newX){
    this.x = newX;
  }

  set setY(newY){
    this.y = newY;
  }

  get getValue(){
    return this.value;
  }

  set setValue(value){
    this.value = value;
  }





}
