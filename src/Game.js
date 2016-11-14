"use strict"

function Game(player1, player2, grid) {
  this._players = [player1, player2];
  this._currentGrid = grid ? grid : new Grid();
  this._winner;
  this._playersInTurns = []
}

Game.prototype = {
  getPlayer1: function() {
    return this._players[0]
  },
  getPlayer2: function() {
    return this._players[this._players.length - 1]
  },
  play: function(player, x, y) {
    this._validateGameAndPlayer(player, x, y)
    this._currentGrid.play(player, x, y)
  },
  getGrid: function() {
    return this._currentGrid.getGrid();
  },
  getWinner: function() {
    return this._winner;
  },
  _validateGameAndPlayer: function(player, x, y) {
    if(this._isGameOver()) { throw new Error("Game Over") }
  },
  _isGameOver: function() {
    return typeof this._winner !== 'undefined'
  }
}
