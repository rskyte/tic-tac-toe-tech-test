describe("Board", function(){
  var board;

  beforeEach(function(){
    board = new Board()
  })

  it("is initialised with an empty board", function(){
    expect(board.board).toEqual([['-','-','-'],
                                 ['-','-','-'],
                                 ['-','-','-']])
  })

  it("shows the board", function(){
    expect(board.showBoard()).toEqual([['-','-','-'],
                                       ['-','-','-'],
                                       ['-','-','-']])
  })

  it("spots on the board can be claimed with an 'X'", function(){
    board.claimSpot('00', 'X')
    expect(board.board).toEqual([['X','-','-'],
                                 ['-','-','-'],
                                 ['-','-','-']])
  })

  it("spots on the board can be claimed with an 'O'", function(){
    board.claimSpot('00', 'O')
    expect(board.board).toEqual([['O','-','-'],
                                 ['-','-','-'],
                                 ['-','-','-']])
  })

  it("claimed spots cannot be claimed again", function(){
    board.claimSpot('00', 'O')
    board.claimSpot('00', 'O')
    expect(board.board).toEqual([['O','-','-'],
                                 ['-','-','-'],
                                 ['-','-','-']])
  })

  it("attempting to claim a claimed spot creates an error message", function(){
    console.log = jasmine.createSpy("log");
    board.claimSpot('00', 'O')
    board.claimSpot('00', 'O')
    expect(console.log).toHaveBeenCalledWith("Spot already taken!");
  })
})
