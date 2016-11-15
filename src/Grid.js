"use strict"

function Grid() {
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
    var oneDimArray = []
    for (var i = 0; i < this._gridContent.length; i++) {
      oneDimArray = oneDimArray.concat(this._gridContent[i])
    }
    return !oneDimArray.includes(null)
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
    return this._isSamePlayerInARow(player, this._gridContent)
  },
  _winsWithAColumn: function(player) {
    var self = this
    var transposedArray = self._gridContent[0].map(function(col, i) {
      return self._gridContent.map(function(row) { return row[i] })
    });
    return self._isSamePlayerInARow(player, transposedArray)
  },
  _isSamePlayerInARow: function(player, currentGrid) {
    var result = []
    var count = 0;
    for (var i = 0; i < currentGrid.length; i++) {
      for (var j = 0; j < currentGrid[i].length; j++) {
        if (currentGrid[i][j] === player) { count++ }
      }
      result.push(count);
      count = 0;
    }
    return result.includes(3);
  },
  _winsWithADiagonal: function(player) {
    return this._winsFromLeftToRight(player) || this._winsFromRightToLeft(player)
  },
  _winsFromLeftToRight: function(player) {
    var count = 0;
    for (var i = 0; i < this._gridContent.length; i++) {
      if (this._gridContent[i][i] === player) { count++ }
    }
    return count === 3;
  },
  _winsFromRightToLeft: function(player) {
    var count = 0;
    var reversedArray = this._gridContent.reverse()
    for (var i = 0; i < reversedArray.length; i++) {
      if (reversedArray[i][i] === player) { count++ }
    }
    return count === 3;
  }
}
