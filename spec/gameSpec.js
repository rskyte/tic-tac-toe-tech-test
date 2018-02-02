describe("Game",function(){
  var game;
  var board;
  var turnHandlerX;
  var turnHandlerO;

  beforeEach(function(){
    board = jasmine.createSpyObj('myBoard', ['showBoard', 'claimSpot'])
    turnHandlerX = {isXTurn: true, isOTurn: false}
    turnHandlerO = {isXTurn: false, isOTurn: true}
    winResult = {getResult: function() { return "endGame" }}
    noResult = {getResult: function() { return null }}
    game = new Game(board, turnHandlerX, noResult)
  })

  it("placeX calls claimSpot on board", function(){
    game.placeX('00')
    expect(board.claimSpot).toHaveBeenCalled()
  })

  it("placeO calls claimSpot on board", function(){
    game = new Game(board, turnHandlerO, noResult)
    game.placeO('00')
    expect(board.claimSpot).toHaveBeenCalled()
  })

  it("doesn't claim a spot if not the correct player's turn", function(){
    game.placeO('00')
    expect(board.claimSpot).toHaveBeenCalledTimes(0)
  })

  it("ends the game using result class message (if there is a winner or a draw)", function(){
    game = new Game(board, turnHandlerO, winResult)
    console.log = jasmine.createSpy('log')
    game.endGame()
    expect(console.log).toHaveBeenCalledWith("endGame")
  })

  it("allows the game to continue if the game isn't over", function(){
    console.log = jasmine.createSpy('log')
    game.endGame()
    expect(console.log).toHaveBeenCalledTimes(0)
  })
})
