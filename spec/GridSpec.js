"use strict"

describe("Grid", function() {
  var grid;
  var player1;
  var player2;

  beforeEach(function() {
    grid = new Grid();
    player1 = jasmine.createSpyObj("player1", ['getName']);
    player2 = jasmine.createSpyObj("player2", ['getName']);
  })

  describe("#claimField", function() {
    it("add the player into the requested field", function() {
      grid.claimField(player1, 0, 1);
      expect(grid._gridContent[1][0]).toEqual(player1);
    })
  })

  describe("#getGrid", function() {
    it("returns a copy of the grid", function() {
      grid.claimField(player2, 2, 2)
      expect(grid.getGrid()[2][2]).toEqual(player2)
    })
  })

  describe("#isValidChoice", function() {
    it("returns true if field is not taken", function() {
      expect(grid.isValidChoice(2, 1)).toBe(true)
    })

    it("returns false if field is taken", function() {
      grid.claimField(player1, 1, 2)
      expect(grid.isValidChoice(1, 2)).toBe(false)
    })

    it("returns false if coordinates are out of grid", function() {
      expect(grid.isValidChoice(4, 5)).toBe(false)
    })
  })

  describe("#isGridFull", function() {
    it("returns true if there is no more empty field in the grid", function() {
      for (var i = 0; i < grid.getGrid().length; i++) {
        for (var j = 0; j < grid.getGrid().length; j++) {
          grid.claimField(player1, i, j)
        }
      }
      expect(grid.isGridFull()).toBe(true);
    })

    it("returns false if there is still empty field in the grid", function() {
      expect(grid.isGridFull()).toBe(false);
    })
  })

  describe("#playerWins", function() {
    it("returns true for player1 if all fields are claimed in a row", function() {
      grid.claimField(player1, 0, 0)
      grid.claimField(player2, 1, 1)
      grid.claimField(player1, 1, 0)
      grid.claimField(player2, 2, 1)
      grid.claimField(player1, 2, 0)
      expect(grid.playerWins(player1)).toBe(true)
    })

    it("returns true for player1 if all fields are claimed in a column", function() {
      grid.claimField(player1, 0, 0)
      grid.claimField(player2, 1, 1)
      grid.claimField(player1, 0, 1)
      grid.claimField(player2, 2, 1)
      grid.claimField(player1, 0, 2)
      expect(grid.playerWins(player1)).toBe(true)
    })

    xit("returns true for player1 if all fields are claimed in diagonal", function() {

    })
  })


})
