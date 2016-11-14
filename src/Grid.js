"use strict"

function Grid() {
  // const _GRID_SIZE = 3
  // this._gridSize = _GRID_SIZE
  this._gridContent = [[null, null, null], [null, null, null], [null, null, null]]
}

Grid.prototype = {
  getGrid: function() {
    return this._gridContent.copyWithin()
  },
  claimField: function(player, x, y) {
    this._gridContent[y][x] = player;
  },
  isValidChoice: function(x, y) {
    return this._isInsideGrid(x, y) && this._isFieldEmpty(x, y);
  },
  isGridFull: function() {
    var result = true
    for (var i = 0; i < this._gridContent.length; i++) {
      for (var j = 0; j < this._gridContent.length; j++) {
        if (this._gridContent[i][j] === null) {
          result = false
        }
      }
    }
    return result
  },
  playerWins: function(player) {
    return this._winsWithARow(player) || this._winsWithAColumn(player) || this._winsWithADiagonal(player)
  },
  _isInsideGrid: function(x, y) {
    return x >= 0 && x < this._gridContent.length && y >= 0 && y < this._gridContent.length;
  },
  _isFieldEmpty: function(x, y) {
    return this._gridContent[y][x] === null;
  },
  _winsWithARow: function(player) {
    var result = []
    var count = 0;
    for (var i = 0; i < this._gridContent.length; i++) {
      for (var j = 0; j < this._gridContent[i].length; j++) {
        if (this._gridContent[i][j] === player) { count++ }
      }
      result.push(count);
      count = 0;
    }
    return result.includes(3);
  },
  _winsWithAColumn: function(player) {
    var result = []
    var count = 0;
    var self = this
    var transposedArray = self._gridContent[0].map(function(col, i) {
      return self._gridContent.map(function(row) { return row[i] })
    });
    for (var i = 0; i < transposedArray.length; i++) {
      for (var j = 0; j < transposedArray[i].length; j++) {
        if (transposedArray[i][j] === player) { count++ }
      }
      result.push(count);
      count = 0;
    }
    return result.includes(3);
  },
  _winsWithADiagonal: function(player) {
    return false
  }
}
