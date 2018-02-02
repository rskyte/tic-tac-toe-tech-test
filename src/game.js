function Game(board = new Board(), turnHandler = new TurnHandler(), result = new Result()) {
  this.board = board
  this.turn = turnHandler
  this.result = result
}

Game.prototype.placeX = function(spot) {
  this.turn.isXTurn ? this.claimSpot(spot, 'X') : console.log("It's O's turn!")
}

Game.prototype.placeO = function(spot) {
  this.turn.isOTurn ? this.claimSpot(spot, 'O') : console.log("It's X's turn!")
}

Game.prototype.claimSpot = function(spot, marker) {
  this.board.claimSpot(spot, marker)
}

Game.prototype.endGame = function() {
  var result = this.result.getResult(this.board.showBoard())
  if(result) {
    console.log(result)
  }
}
