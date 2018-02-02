function Game(board = new Board(), turnHandler = new TurnHandler()) {
  this.board = board
  this.turn = turnHandler
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
