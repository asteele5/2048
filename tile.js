class Tile{

  constructor(value){
    this.value = value;
    this.x = 0;
    this.y = 0;
    // this.image = new Image();
    // this.image.src = "C:/\\Users/\\mrswa/\\2048-Game/\\2048/\\Images/\\number"+this.value+".png";

    console.log('hello');
  }


  static drawTiles(tiles){
    var i;
    for(i = 0; i < tiles.length; i++){
      var tile = new Image();
      tile.src = "C:/\\Users/\\mrswa/\\2048-Game/\\2048/\\Images/\\number"+tiles[i].getValue+".png";
      ctx.drawImage(tile, tiles[i].getX+1, tiles[i].getY+0.5, boxWidth-.5, boxHeight-1.5);
    }
  }

  // static move(tiles, direction){
  //   var i;
  //   for(i = 0; i < tiles.length; i++){
  //     if(direction == 'UP'){
  //       tiles[i].setY = 0;
  //     }
  //     else if(direction == 'DOWN'){
  //       tiles[i].setY = boxHeight*3;
  //     }
  //     else if(direction == 'RIGHT'){
  //       tiles[i].setX = boxWidth*3;
  //     }
  //     else if(direction == 'LEFT'){
  //         var tilesInRow = this.getRow(tiles, i);
  //         console.log(tilesInRow[0].getX);
  //         tilesInRow.sort((a, b) => (a.getX > b.getX) ? 1 : -1);
  //         console.log(tilesInRow[0].getX);
  //         this.moveRow(tilesInRow, direction);
  //         console.log(tilesInRow[0].getX);
  //
  //         // tiles[i].setX = 0;
  //
  //     }
  //   }
  //
  // }

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
