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

Result.prototype.flattenBoard = function(board) {
  var arr = []
  for(var i=0;i<board.length;i++) {
    arr.push(board[i][0])
    arr.push(board[i][1])
    arr.push(board[i][2])
  }
  return arr
}

Result.prototype.checkWin = function(board) {
  this.checkDiagonals(board)
  this.checkHorizontals(board)
  this.checkHorizontals(this.transposeBoard(board))
}

Result.prototype.checkDiagonals = function(board) {
  leftToRight = board[0][0] == board[1][1] &&
                board[1][1] == board[2][2] &&
                board[1][1] != '-'
  rightToLeft = board[0][2] == board[1][1] &&
                board[1][1] == board[2][0] &&
                board[1][1] != '-'
  if(leftToRight || rightToLeft) { this.gameEndMessage = board[1][1] + " wins!" }
}

Result.prototype.checkHorizontals = function(board) {
  for(var i=0;i<board.length;i++) {
    if(board[i][0] == board[i][1] &&
       board[i][1] == board[i][2] &&
       board[i][1] != '-') {
      this.gameEndMessage = board[i][1] + " wins!"
    }
  }
}

Result.prototype.checkDraw = function(board) {
  var flatBoard = this.flattenBoard(board)
  if(!flatBoard.includes('-')){ this.gameEndMessage = "It's a draw!"}
}
