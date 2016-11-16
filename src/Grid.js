"use strict"

class Grid {
  constructor() {
    this._gridContent = [[null, null, null], [null, null, null], [null, null, null]]
  }

  getGrid() {
    return this._gridContent.copyWithin()
  }

  claimField(player, x, y) {
    this._gridContent[y][x] = player;
  }

  isValidChoice(x, y) {
    return this._isInsideGrid(x, y) && this._isFieldEmpty(x, y);
  }

  isGridFull() {
    let oneDimArray = []
    for (let i = 0; i < this._gridContent.length; i++) {
      oneDimArray = oneDimArray.concat(this._gridContent[i])
    }
    return !oneDimArray.includes(null)
  }

  playerWins(player) {
    return this._winsWithARow(player) || this._winsWithAColumn(player) || this._winsWithADiagonal(player)
  }

  _isInsideGrid(x, y) {
    return x >= 0 && x < this._gridContent.length && y >= 0 && y < this._gridContent.length;
  }

  _isFieldEmpty(x, y) {
    return this._gridContent[y][x] === null;
  }

  _winsWithARow(player) {
    return this._isSamePlayerInARow(player, this._gridContent)
  }

  _winsWithAColumn(player) {
    let self = this
    let transposedArray = self._gridContent[0].map(function(col, i) {
      return self._gridContent.map(row => row[i])
    });
    return self._isSamePlayerInARow(player, transposedArray)
  }

  _isSamePlayerInARow(player, currentGrid) {
    let result = []
    let count = 0;
    for (let i = 0; i < currentGrid.length; i++) {
      for (let j = 0; j < currentGrid[i].length; j++) {
        if (currentGrid[i][j] === player) count++
      }
      result.push(count);
      count = 0;
    }
    return result.includes(3);
  }

  _winsWithADiagonal(player) {
    return this._winsFromLeftToRight(player) || this._winsFromRightToLeft(player)
  }

  _winsFromLeftToRight(player) {
    return this._isSamePlayerInADiagonal(player, this._gridContent)
  }

  _winsFromRightToLeft(player) {
    let reversedArray = this._gridContent.reverse()
    return this._isSamePlayerInADiagonal(player, reversedArray)
  }

  _isSamePlayerInADiagonal(player, currentGrid) {
    let count = 0;
    for (let i = 0; i < currentGrid.length; i++) {
      if (currentGrid[i][i] === player) count++
    }
    return count === 3;
  }
}

// Grid.prototype = {
//   getGrid: function() {
//     return this._gridContent.copyWithin()
//   },
//   claimField: function(player, x, y) {
//     this._gridContent[y][x] = player;
//   },
//   isValidChoice: function(x, y) {
//     return this._isInsideGrid(x, y) && this._isFieldEmpty(x, y);
//   },
//   isGridFull: function() {
//     let oneDimArray = []
//     for (let i = 0; i < this._gridContent.length; i++) {
//       oneDimArray = oneDimArray.concat(this._gridContent[i])
//     }
//     return !oneDimArray.includes(null)
//   },
//   playerWins: function(player) {
//     return this._winsWithARow(player) || this._winsWithAColumn(player) || this._winsWithADiagonal(player)
//   },
//   _isInsideGrid: function(x, y) {
//     return x >= 0 && x < this._gridContent.length && y >= 0 && y < this._gridContent.length;
//   },
//   _isFieldEmpty: function(x, y) {
//     return this._gridContent[y][x] === null;
//   },
//   _winsWithARow: function(player) {
//     return this._isSamePlayerInARow(player, this._gridContent)
//   },
//   _winsWithAColumn: function(player) {
//     let self = this
//     let transposedArray = self._gridContent[0].map(function(col, i) {
//       return self._gridContent.map(row => row[i])
//     });
//     return self._isSamePlayerInARow(player, transposedArray)
//   },
//   _isSamePlayerInARow: function(player, currentGrid) {
//     let result = []
//     let count = 0;
//     for (let i = 0; i < currentGrid.length; i++) {
//       for (let j = 0; j < currentGrid[i].length; j++) {
//         if (currentGrid[i][j] === player) count++
//       }
//       result.push(count);
//       count = 0;
//     }
//     return result.includes(3);
//   },
//   _winsWithADiagonal: function(player) {
//     return this._winsFromLeftToRight(player) || this._winsFromRightToLeft(player)
//   },
//   _winsFromLeftToRight: function(player) {
//     return this._isSamePlayerInADiagonal(player, this._gridContent)
//   },
//   _winsFromRightToLeft: function(player) {
//     let reversedArray = this._gridContent.reverse()
//     return this._isSamePlayerInADiagonal(player, reversedArray)
//   },
//   _isSamePlayerInADiagonal: function(player, currentGrid) {
//     let count = 0;
//     for (let i = 0; i < currentGrid.length; i++) {
//       if (currentGrid[i][i] === player) count++
//     }
//     return count === 3;
//   }
// }
