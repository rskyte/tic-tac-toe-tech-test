describe("Game",function(){
  var game;
  var board;

  beforeEach(function(){
    board = jasmine.createSpyObj('myBoard', ['showBoard', 'claimSpot'])
    game = new Game(board)
  })

  it("placeX calls claimSpot on board", function(){
    game.placeX('00')
    expect(board.claimSpot).toHaveBeenCalled()
  })

  it("placeO calls claimSpot on board", function(){
    game.placeO('00')
    expect(board.claimSpot).toHaveBeenCalled()
  })
})
