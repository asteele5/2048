class Tile{

  constructor(value, x, y){
    this.value = value;
    this.x = x;
    this.y = y;
    // this.image = new Image();
    // this.image.src = "C:/\\Users/\\mrswa/\\2048-Game/\\2048/\\Images/\\number"+this.value+".png";

    console.log('hello');
  }


  static drawTiles(tiles){
    var i;
    var j;
    for(i = 0; i < tiles.length; i++){
      for(j = 0; j < tiles[0].length; j++){
        if(tiles[i][j].getValue !== 0){
          var tile = new Image();
          tile.src = "C:/\\Users/\\mrswa/\\2048-Game/\\2048/\\Images/\\number"+tiles[i][j].getValue+".png";
          ctx.drawImage(tile, tiles[i][j].getX+1, tiles[i][j].getY+0.5, boxWidth-.5, boxHeight-1.5);
        }
      }
    }
  }

  static move(tiles, direction){
    var i;
    var j;

          var numi = i;
          var numj = j;
          //FIX
          if(direction == 'UP'){
            console.log('up')
            for(j = 0; j < tiles.length; j++){
              for(i = 0; i < tiles.length; i++){
                if(tiles[i][j].getValue !== 0){
                  var row = i;
                  while(row > 0){
                    if(tiles[row-1][j].getValue == 0){
                      tiles[row-1][j].setValue = tiles[row][j].getValue;
                      tiles[row][j].setValue = 0;
                      row--;
                    }
                    else break;
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
                    console.log('run')
                    if(tiles[row+1][j].getValue == 0){
                      tiles[row+1][j].setValue = tiles[row][j].getValue;
                      tiles[row][j].setValue = 0;
                      row++;
                    }
                    else break;
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
                    }
                    else break;
                  }
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
                    }
                    else break;

                  }


                }
              }
            }
        }



  }

//FIX
  // static moveRow(tilesInRow, direction){
  //   var i;
  //   var rowFill = {0:false, 75:false, 150:false, 225:false};
  //
  //
  //   for(i = 0; i < tilesInRow.length; i++){
  //     if(tilesInRow[i].getX == 0){
  //       rowFill[col0] = true;
  //     }
  //     else if(tilesInRow[i].getX == boxWidth){
  //       rowFill[col1] = true;
  //     }
  //     else if(tilesInRow[i].getX == boxWidth*2){
  //       rowFill[col2] = true;
  //     }
  //     else if(tilesInRow[i].getX == boxWidth*3){
  //       rowFill[col3] = true;
  //     }
  //   }
  //   console.log(rowFill[0]);
  //   for(i = 0; i < tilesInRow.length; i++){
  //     var nextXLocation = tilesInRow[i].getX - boxWidth;
  //
  //     while(tilesInRow[i].getX > 0 && rowFill[nextXLocation] == false){
  //       tilesInRow[i].setX = nextXLocation;
  //       console.log('loop');
  //     }
  //   }
  // }

  //
  // static getRow(tiles, row){
  //   var i;
  //   var tilesInRow = new Array();
  //   for(i = 0; i < tiles.length; i++){
  //     if(tiles[i].getY == boxHeight*row){
  //       tilesInRow.push(tiles[i]);
  //     }
  //   }
  //   return tilesInRow;
  //
  // }

  getRealX(num){
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

  getRealY(num){
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

  // static get getTileImage(){
  //   return this.image;
  // }

}
