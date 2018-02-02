describe("Game",function(){
  var game;
  var board;
  var turnHandlerX;
  var turnHandlerO;

  beforeEach(function(){
    board = jasmine.createSpyObj('myBoard', ['showBoard', 'claimSpot'])
    turnHandlerX = {isXTurn: true, isOTurn: false}
    turnHandlerO = {isXTurn: false, isOTurn: true}
    game = new Game(board, turnHandlerX)
  })

  it("placeX calls claimSpot on board", function(){
    game.placeX('00')
    expect(board.claimSpot).toHaveBeenCalled()
  })

  it("placeO calls claimSpot on board", function(){
    game = new Game(board, turnHandlerO)
    game.placeO('00')
    expect(board.claimSpot).toHaveBeenCalled()
  })

  it("doesn't claim a spot if not the correct player's turn", function(){
    game.placeO('00')
    expect(board.claimSpot).toHaveBeenCalledTimes(0)
  })
})
