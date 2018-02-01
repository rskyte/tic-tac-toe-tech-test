function Game(board = new Board()) {
  this.board = board
}

Game.prototype.placeX = function(spot) {
  this.claimSpot(spot, 'X')
}

Game.prototype.placeO = function(spot) {
  this.claimSpot(spot, 'O')
}

Game.prototype.claimSpot = function(spot, marker) {
  this.board.claimSpot(spot, marker)
}
