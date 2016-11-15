"use strict"

describe("Game", function() {
  var game;
  var player1;
  var player2;
  var grid

  beforeEach(function() {
    player1 = jasmine.createSpyObj("player1", ['getName']);
    player2 = jasmine.createSpyObj("player2", ['getName']);
    grid = jasmine.createSpyObj("grid", ['claimField', 'getGrid', 'isGridFull', 'isValidChoice', 'playerWins']);
    game = new Game(player1, player2, grid);
    grid.isValidChoice.and.returnValue(true)
    grid.playerWins.and.returnValue(false)
  })

  describe("#getPlayer1", function() {
    it("returns player1", function() {
      expect(game.getPlayer1()).toEqual(player1);
    })
  })

  describe("#getPlayer2", function() {
    it("return player2", function() {
      expect(game.getPlayer2()).toEqual(player2);
    })
  })

  describe("#getWinner", function() {
    it("returns the winner of the game", function() {
      grid.playerWins.and.returnValue(true)
      game.play(player2, 0, 1)
      expect(game.getWinner()).toEqual(player2)
    })
  })

  describe("#getGrid", function() {
    it("calls the getGrid method on the grid", function() {
      game.getGrid();
      expect(grid.getGrid).toHaveBeenCalled();
    })

    it("returns the value returned by the grid", function() {
      var emptyGrid = new Array(3).fill(new Array(3))
      grid.getGrid.and.returnValue(emptyGrid)
      expect(game.getGrid()).toEqual(emptyGrid)
    })
  })

  describe("#play", function() {
    it("calls the claimField method on the grid", function() {
      game.play(player1, 2, 1)
      expect(grid.claimField).toHaveBeenCalled();
    })

    it("confirms that the field is claimed", function() {
      expect(game.play(player1, 0, 2)).toEqual("Field claimed. Next turn.")
    })

    it("raises error if there is a winner, and game is over", function() {
      grid.playerWins.and.returnValue(true)
      game.play(player1, 1, 1)
      expect(function() { game.play(player2, 0, 2) }).toThrowError("Game Over")
    })

    it("raises error if grid is full and game is over", function() {
      grid.isGridFull.and.returnValue(true);
      expect(function() { game.play(player1, 1, 1) }).toThrowError("Game Over")
    })

    it("calls the isGridFull method on the grid", function() {
      game.play(player1, 2, 1)
      expect(grid.isGridFull).toHaveBeenCalled();
    })

    it("raises error if the same player wants to play again", function() {
      game.play(player1, 0, 0)
      expect( function() { game.play(player1, 1, 1)}).toThrowError("Invalid player")
    })

    it("calls the isValidChoice on the grid", function() {
      game.play(player1, 1, 1)
      expect(grid.isValidChoice).toHaveBeenCalled();
    })

    it("raises error if the choice is invalid", function() {
      grid.isValidChoice.and.returnValue(false)
      expect(function() { game.play(player2, 4, 1)}).toThrowError("Invalid choice")
    })

    it("calls playerWins method on the grid", function() {
      game.play(player1, 2, 2)
      expect(grid.playerWins).toHaveBeenCalled();
    })

    it("player is added to winner variable if player wins the game", function() {
      grid.playerWins.and.returnValue(true)
      game.play(player2, 1, 1)
      expect(game._winner).toEqual(player2)
    })

    it("confirms that the player won the game", function() {
      grid.playerWins.and.returnValue(true)
      player2.getName.and.returnValue("Bob")
      expect(game.play(player2, 1, 1)).toEqual("Bob won!")
    })
  })
})
