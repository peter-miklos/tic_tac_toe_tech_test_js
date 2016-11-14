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
  }
}
