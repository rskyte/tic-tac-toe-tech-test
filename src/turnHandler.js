function TurnHandler() {
  this.xTurn = true
  this.oTurn = false
}

TurnHandler.prototype.changeTurn = function() {
  var temp = this.xTurn
  this.xTurn = this.oTurn
  this.oTurn = temp
}

TurnHandler.prototype.isXTurn = function() {
  return this.xTurn
}

TurnHandler.prototype.isOTurn = function() {
  return this.oTurn
}
