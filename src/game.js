function Game(board = new Board(), turnHandler = new TurnHandler(), result = new Result()) {
  this.board = board
  this.turn = turnHandler
  this.result = result
}

Game.prototype.setup = function() {
  console.log("Welcome to Tic-Tac-Toe\nTo play place X and O markers on the board when it's your turn and try to get 3-in-a-row!\nBoard:\n  OO|01|02\n  10|11|12\n  20|21|22\nTo place marker type in the console:\n  game.placeX('coordinate')\nor\n  game.placeO('coordinate')\n\ne.g game.placeX('00')\n\nEnjoy!")
}

Game.prototype.placeX = function(spot) {
  this.turn.isXTurn ? this.claimSpot(spot, 'X') : console.log("It's O's turn!")
}

Game.prototype.placeO = function(spot) {
  this.turn.isOTurn ? this.claimSpot(spot, 'O') : console.log("It's X's turn!")
}

Game.prototype.claimSpot = function(spot, marker) {
  if(this.board.claimSpot(spot, marker)) {
    this.turn.changeTurn()
    this.endGame()
  }
}

Game.prototype.endGame = function() {
  var result = this.result.getResult(this.board.showBoard())
  if(result) {
    console.log(result)
  }
}
