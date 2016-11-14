"use strict"

function Grid(gridSize) {
  const _GRID_SIZE = 3
  this._gridSize = gridSize ? gridSize : _GRID_SIZE
  this._gridContent = new Array(this._gridSize).fill(new Array(this._gridSize))
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
    for (var i = 0; i < this._gridSize; i++) {
      for (var j = 0; j < this._gridSize; j++) {
        if (this._gridContent[i][j] === undefined) {
          result = false
        }
      }
    }
    return result
  },
  _isInsideGrid: function(x, y) {
    return x >= 0 && x < this._gridSize && y >= 0 && y < this._gridSize;
  },
  _isFieldEmpty: function(x, y) {
    return this._gridContent[y][x] === undefined;
  },
}
