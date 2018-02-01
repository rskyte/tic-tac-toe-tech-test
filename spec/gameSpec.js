describe("Game",function(){
  var game

  beforeEach(function(){
    game = new Game()
  })

  it("is initialised with an empty board", function(){
    expect(game.board).toEqual([['-','-','-'],
                                ['-','-','-'],
                                ['-','-','-']])
  })

  it("spots on the board can be claimed with an 'X'", function(){
    game.placeX('00')
    expect(game.board).toEqual([['X','-','-'],
                                ['-','-','-'],
                                ['-','-','-']])
  })

  it("spots on the board can be claimed with an 'O'", function(){
    game.placeO('00')
    expect(game.board).toEqual([['O','-','-'],
                                ['-','-','-'],
                                ['-','-','-']])
  })
})
