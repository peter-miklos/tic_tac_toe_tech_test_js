"use strict"

function Game(player1, player2, grid) {
  this._players = [player1, player2];
  this._currentGrid = grid ? grid : new Grid();
}

Game.prototype = {
  getPlayer1: function() {
    return this._players[0]
  },
  getPlayer2: function() {
    return this._players[this._players.length - 1]
  }
}
