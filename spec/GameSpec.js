"use strict"

describe("Game", function() {
  var game;
  var player1;
  var player2;
  var grid

  beforeEach(function() {
    player1 = jasmine.createSpyObj("player1", ['getName']);
    player2 = jasmine.createSpyObj("player2", ['getName']);
    grid = jasmine.createSpyObj("grid", ['play', 'getGrid']);
    game = new Game(player1, player2, grid);
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
      game._winner = player2;
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
    it("calls the play method on the grid", function() {
      game.play(player1, 2, 1)
      expect(grid.play).toHaveBeenCalled();
    })

    it("raises error if game is over", function() {
      game._winner = player1
      expect(function() {
        game.play(player2, 0, 2)
      }).toThrowError("Game Over")
    })
  })


})
