"use strict"

describe("Game", function() {
  var game;
  var player1;
  var player2;
  var grid

  beforeEach(function() {
    player1 = jasmine.createSpyObj("player1", ['getName']);
    player2 = jasmine.createSpyObj("player2", ['getName']);
    grid = jasmine.createSpy("grid");
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
    xit("returns the winner of the game", function() {

    })
  })

  describe("#getGrid", function() {
    xit("returns the current grid", function() {

    })
  })

  describe("#play", function() {

  })


})
