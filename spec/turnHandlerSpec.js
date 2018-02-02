describe("TurnHandler", function(){
  var turnHandler;

  beforeEach(function(){
    turnHandler = new TurnHandler()
  })

  it("initialises with the 'X' player going first", function(){
    expect(turnHandler.xTurn).toBe(true)
    expect(turnHandler.oTurn).toBe(false)
  })

  it("changes the turn", function(){
    turnHandler.changeTurn()
    expect(turnHandler.xTurn).toBe(false)
    expect(turnHandler.oTurn).toBe(true)
  })

  it("returns xTurn", function(){
    expect(turnHandler.isXTurn()).toBe(true)
  })

  it("returns oTurn", function(){
    expect(turnHandler.isOTurn()).toBe(false)
  })
})
