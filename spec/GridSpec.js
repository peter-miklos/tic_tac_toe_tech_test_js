"use strict"

describe("Grid", function() {
  var grid;
  var player1;
  var player2;

  beforeEach(function() {
    player1 = jasmine.createSpyObj("player1", ['getName']);
    player2 = jasmine.createSpyObj("player2", ['getName']);
    grid = new Grid();
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
      var smallGrid = new Grid(1)
      smallGrid.claimField(player1, 0, 0)
      expect(smallGrid.isGridFull()).toBe(true);
    })

    it("returns false if there is still empty field in the grid", function() {
      expect(grid.isGridFull()).toBe(false);
    })
  })


})
