describe("Result", function(){
  var result;
  var board;

  beforeEach(function(){
    result = new Result()
  })

  it("knows when game ends in a draw (all squares filled no winner)", function(){
    board = [['X','X','O'],
             ['O','O','X'],
             ['X','O','X']]
    result.getResult(board)
    expect(result.gameEndMessage).toEqual("It's a draw!")
  })

  it("determines the winner", function(){
    board = [['X','-','-'],
             ['-','X','-'],
             ['-','-','X']]
    result.getResult(board)
    expect(result.gameEndMessage).toEqual("X wins!")

    board = [['-','-','X'],
             ['-','X','-'],
             ['X','-','-']]
    result.getResult(board)
    expect(result.gameEndMessage).toEqual("X wins!")

    board = [['X','X','X'],
             ['-','-','-'],
             ['-','-','-']]
    result.getResult(board)
    expect(result.gameEndMessage).toEqual("X wins!")

    board = [['-','-','-'],
             ['X','X','X'],
             ['-','-','-']]
    result.getResult(board)
    expect(result.gameEndMessage).toEqual("X wins!")

    board = [['-','-','-'],
             ['-','-','-'],
             ['X','X','X']]
    result.getResult(board)
    expect(result.gameEndMessage).toEqual("X wins!")

    board = [['X','-','-'],
             ['X','-','-'],
             ['X','-','-']]
    result.getResult(board)
    expect(result.gameEndMessage).toEqual("X wins!")

    board = [['-','X','-'],
             ['-','X','-'],
             ['-','X','-']]
    result.getResult(board)
    expect(result.gameEndMessage).toEqual("X wins!")

    board = [['-','-','X'],
             ['-','-','X'],
             ['-','-','X']]
    result.getResult(board)
    expect(result.gameEndMessage).toEqual("X wins!")

    board = [['-','-','O'],
             ['-','-','O'],
             ['-','-','O']]
    result.getResult(board)
    expect(result.gameEndMessage).toEqual("O wins!")
  })
})
