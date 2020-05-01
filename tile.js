class Tile{

  constructor(value, x, y){
    this.value = value;
    this.x = x;
    this.y = y;

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
          ctx.fillRect(tiles[i][j].getX+.25, tiles[i][j].getY, boxWidth-0.75, boxHeight);
          // font-family: "Trebuchet MS", Helvetica, sans-serif

          ctx.font = 23 + "px Arial";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.fillText(tiles[i][j].getValue.toString(), tiles[i][j].getX+34.5, tiles[i][j].getY+25);

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
    return tiles;
  }

  static move(tiles, direction){
    var i;
    var j;
    var move = false;
          var numi = i;
          var numj = j;
          if(direction == 'UP'){
            for(j = 0; j < tiles.length; j++){
              for(i = 0; i < tiles.length; i++){

                if(tiles[i][j].getValue !== 0){

                  var row = i;

                  while(row > 0){

                    //Checks if tile can move up
                    if(tiles[row-1][j].getValue == 0){
                      tiles[row-1][j].setValue = tiles[row][j].getValue;
                      tiles[row][j].setValue = 0;
                      row--;
                      move = true;
                    }
                    //Checks if tiles are matching
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
                    //Checks if tile can move down
                    if(tiles[row+1][j].getValue == 0){
                      tiles[row+1][j].setValue = tiles[row][j].getValue;
                      tiles[row][j].setValue = 0;
                      row++;
                      move = true;
                    }
                    //Checks if tiles are matching
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
                    //Checks if tile can move down
                    if(tiles[i][col+1].getValue == 0){
                      tiles[i][col+1].setValue = tiles[i][col].getValue;
                      tiles[i][col].setValue = 0;
                      col++;
                      move = true;
                    }
                    //Checks if tiles are matching
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
                    //Checks if tile can move down
                    if(tiles[i][col-1].getValue == 0){
                      tiles[i][col-1].setValue = tiles[i][col].getValue;
                      tiles[i][col].setValue = 0;
                      col--;
                      move = true;
                    }
                    //Checks if tiles are matching
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
