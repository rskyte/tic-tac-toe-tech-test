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
  if(this.board[coords[0]][coords[1]] == '-') {
    this.board[coords[0]][coords[1]] = marker
    return true
  } else {
    console.log("Spot already taken!")
    return false
  }
}
