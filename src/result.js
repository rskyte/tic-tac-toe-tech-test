function Result(){
  this.gameEndMessage = null
}

Result.prototype.getResult = function(board) {
  this.checkWin(board)
  if(!this.gameEndMessage){ this.checkDraw(board) }
  return this.gameEndMessage
}

Result.prototype.transposeBoard = function(board) {
    return Object.keys(board[0])
        .map(colNumber => board.map(rowNumber => rowNumber[colNumber]));
}

Result.prototype.xAxisFlipBoard = function(board) {
  for(var i=0;i<board.length;i++) {
    board[i].reverse()
  }
  return board
}

Result.prototype.flattenBoard = function(board) {
  var arr = []
  for(var i=0;i<board.length;i++) {
    for(var j=0;j<board[i].length;j++) {
      arr.push(board[i][j])
    }
  }
  return arr
}

Result.prototype.checkWin = function(board) {
  this.checkDiagonals(board)
  this.checkHorizontals(board)
  this.checkHorizontals(this.transposeBoard(board))
}

Result.prototype.checkDiagonals = function(board) {
  for(var i=0;i<(board.length - 1);i++) {
    if(board[i][i] == board[i+1][i+1]) {
      if(i != board.length - 2) { continue; }
    } else {
      break;
    }
    this.gameEndMessage = board[i][i] + " wins!"
  }
}

Result.prototype.checkHorizontals = function(board) {
  for(var i=0;i<(board.length);i++) {
    for(var j=0;j<(board[i].length - 1);j++) {
      if(board[i][j] == board[i][j+1] && board[i][j] != '-') {
        if(j != board.length - 2) { continue; }
      } else {
        break;
      }
      this.gameEndMessage = board[i][j] + " wins!"
    }
  }
}

Result.prototype.checkDraw = function(board) {
  var flatBoard = this.flattenBoard(board)
  if(!flatBoard.includes('-')){ this.gameEndMessage = "It's a draw!"}
}
