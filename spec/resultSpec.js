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
    expect(result.getResult(board)).toEqual("It's a draw!")
  })

  it("determines the winner", function(){
    board = [['X','-','-'],
             ['-','X','-'],
             ['-','-','X']]
    expect(result.getResult(board)).toEqual("X wins!")
  })

  it("determines the winner", function(){
    board = [['-','-','X'],
             ['-','X','-'],
             ['X','-','-']]
    expect(result.getResult(board)).toEqual("X wins!")
  })

  it("determines the winner", function(){
    board = [['X','X','X'],
             ['-','-','-'],
             ['-','-','-']]
    expect(result.getResult(board)).toEqual("X wins!")
  })

  it("determines the winner", function(){
    board = [['-','-','-'],
             ['X','X','X'],
             ['-','-','-']]
    expect(result.getResult(board)).toEqual("X wins!")
  })

  it("determines the winner", function(){
    board = [['-','-','-'],
             ['-','-','-'],
             ['X','X','X']]
    expect(result.getResult(board)).toEqual("X wins!")
  })

  it("determines the winner", function(){
    board = [['X','-','-'],
             ['X','-','-'],
             ['X','-','-']]
    expect(result.getResult(board)).toEqual("X wins!")
  })

  it("determines the winner", function(){
    board = [['-','X','-'],
             ['-','X','-'],
             ['-','X','-']]
    expect(result.getResult(board)).toEqual("X wins!")
  })

  it("determines the winner", function(){
    board = [['-','-','X'],
             ['-','-','X'],
             ['-','-','X']]
    expect(result.getResult(board)).toEqual("X wins!")
  })

  it("calculates win for O also", function(){
    board = [['-','-','O'],
             ['-','-','O'],
             ['-','-','O']]
    expect(result.getResult(board)).toEqual("O wins!")
  })

  it("returns null when game isn't over", function(){
    board = [['-','-','-'],
             ['-','-','-'],
             ['-','-','-']]
    expect(result.getResult(board)).toBe(null)
  })
})
