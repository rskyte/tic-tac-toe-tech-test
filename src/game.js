function Game() {
  this.board = [['-','-','-'],
                ['-','-','-'],
                ['-','-','-']]
}

Game.prototype.placeX = function(spot) {
  this.claimSpot(spot, 'X')
}

Game.prototype.placeO = function(spot) {
  this.claimSpot(spot, 'O')
}

Game.prototype.claimSpot = function(spot, marker) {
  coords = spot.split('')
  this.board[coords[0]][coords[1]] = marker
}
