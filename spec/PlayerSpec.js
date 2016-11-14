"use strict"

describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player("Bob")
  })

  describe("#getName", function() {
    it("returns the player's name", function() {
      expect(player.getName()).toEqual("Bob")
    })
  })
})
