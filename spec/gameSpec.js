describe("Game",function(){
  var game;
  var board;
  var turnHandlerX;
  var turnHandlerO;

  beforeEach(function(){
    board = {claimSpot: function(a, b){ return true }, showBoard: function(){}}
    turnHandlerX = {isXTurn: true, isOTurn: false}
    turnHandlerX.changeTurn = jasmine.createSpy('changeTurn')
    turnHandlerO = {isXTurn: false, isOTurn: true}
    winResult = {getResult: function() { return "endGame" }}
    noResult = {getResult: function() { return null }}
    game = new Game(board, turnHandlerX, noResult)
  })

  it("placeX calls claimSpot on board", function(){
    spyOn(board, 'claimSpot')
    game.placeX('00')
    expect(board.claimSpot).toHaveBeenCalled()
  })

  it("placeO calls claimSpot on board", function(){
    game = new Game(board, turnHandlerO, noResult)
    spyOn(board, 'claimSpot')
    game.placeO('00')
    expect(board.claimSpot).toHaveBeenCalled()
  })

  it("doesn't claim a spot if not the correct player's turn", function(){
    spyOn(board, 'claimSpot')
    game.placeO('00')
    expect(board.claimSpot).toHaveBeenCalledTimes(0)
  })

  it("ends the game using result class message (if there is a winner or a draw)", function(){
    console.log = jasmine.createSpy('log')
    game = new Game(board, turnHandlerO, winResult)
    game.endGame()
    expect(console.log).toHaveBeenCalledWith("endGame")
  })

  it("allows the game to continue if the game isn't over", function(){
    console.log = jasmine.createSpy('log')
    game.endGame()
    expect(console.log).toHaveBeenCalledTimes(0)
  })

  it("changes turn after successfully claiming a spot", function(){
    game.placeX('00')
    expect(turnHandlerX.changeTurn).toHaveBeenCalled()
  })

  it("doesn't change turn after unsuccessfully claiming a spot", function(){
    failBoard = {claimSpot: function(a, b){ return false }}
    game = new Game(failBoard, turnHandlerX, noResult)
    game.placeX('00')
    expect(turnHandlerX.changeTurn).toHaveBeenCalledTimes(0)
  })

  it("checks if game is over after a successful move", function(){
    game.endGame = jasmine.createSpy('endGame')
    game.claimSpot('00', 'X')
    expect(game.endGame).toHaveBeenCalled()
  })

  // it("displays game setup upon creation of new game", function(){
  //   console.log = jasmine.createSpy('log')
  //   game = new Game()
  //   var setupMessage = "Welcome to Tic-Tac-Toe\nTo play place X and O markers on the board when it's your turn and try to get 3-in-a-row!\nBoard:\n  OO|01|02\n  10|11|12\n  20|21|22\nTo place marker type in the console:\n  game.placeX('coordinate')\nor\n  game.placeO('coordinate')\n\ne.g game.placeX('00')\n\nEnjoy!"
  //   expect(console.log).toHaveBeenCalledWith(setupMessage)
  // })

  // it("displays board after successful move", function(){
  //   game.claimSpot('00', 'X')
  //   var boardDisplay = ""
  //   expect(console.log).toHaveBeenCalledWith(boardDisplay)
  // })
})
