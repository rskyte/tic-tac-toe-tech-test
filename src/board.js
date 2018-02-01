function Board() {
  this.board = [['-','-','-'],
                ['-','-','-'],
                ['-','-','-']]
}

Board.prototype.showBoard = function() {
  return this.board
}

Board.prototype.claimSpot = function(spot, marker) {
  coords = spot.split('')
  this.board[coords[0]][coords[1]] = marker
}
