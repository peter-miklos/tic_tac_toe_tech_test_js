"use strict"

class Game {
  constructor(player1, player2, grid) {
    this._players = [player1, player2];
    this._currentGrid = grid ? grid : new Grid();
    this._winner;
    this._playersInTurns = []
  }

  getPlayer1() {
    return this._players[0]
  }

  getPlayer2() {
    return this._players[this._players.length - 1]
  }

  play(player, x, y) {
    this._validateGameAndPlayer(player, x, y)
    return this._completeTurn(player, x, y)
  }

  getGrid() {
    return this._currentGrid.getGrid();
  }

  getWinner() {
    return this._winner;
  }

  _validateGameAndPlayer(player, x, y) {
    if(this._isGameOver()) throw new Error("Game Over")
    if(!this._isValidPlayer(player)) throw new Error("Invalid player")
    if(!this._currentGrid.isValidChoice(x, y)) throw new Error("Invalid choice")
  }

  _isGameOver() {
    return typeof this._winner !== 'undefined' || this._currentGrid.isGridFull()
  }

  _isValidPlayer(player) {
    return this._playersInTurns.length === 0 || this._playersInTurns[this._playersInTurns.length - 1] !== player
  }

  _completeTurn(player, x, y) {
    this._currentGrid.claimField(player, x, y);
    this._playersInTurns.push(player);
    if (this._currentGrid.playerWins(player)) this._winner = player;
    return this._winner === player ? (player.getName() + " won!") : "Field claimed. Next turn.";
  }
}
