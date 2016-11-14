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



})
