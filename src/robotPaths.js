class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
  }

  solve() {
    let result = 0;
    const path = this;
    const recurse = (row, col) => {
      let finishedPath = false;
      if (row === path.board.board.length - 1 && col === row) {
        result++;
        finishedPath = true;
      }
      if (!finishedPath) {
        const possibleMoves = path.getPossibleMoves(row, col);
        possibleMoves.forEach((obj) => {
          path.board.togglePiece(obj.row, obj.col);
          recurse(obj.row, obj.col);
        });
      }
      path.board.togglePiece(row, col);
    };
    this.board.togglePiece(0, 0);
    recurse(0, 0);
    return result;
  }

  getPossibleMoves(currentRow, currentCol) {
    const possibleMoves = [];
    if (
      currentCol > 0 &&
      !this.board.hasBeenVisited(currentRow, currentCol - 1)
    ) {
      possibleMoves.push({ row: currentRow, col: currentCol - 1 });
    }
    if (
      currentCol < this.board.board.length - 1 &&
      !this.board.hasBeenVisited(currentRow, currentCol + 1)
    ) {
      possibleMoves.push({ row: currentRow, col: currentCol + 1 });
    }
    if (
      currentRow > 0 &&
      !this.board.hasBeenVisited(currentRow - 1, currentCol)
    ) {
      possibleMoves.push({ row: currentRow - 1, col: currentCol });
    }
    if (
      currentRow < this.board.board.length - 1 &&
      !this.board.hasBeenVisited(currentRow + 1, currentCol)
    ) {
      possibleMoves.push({ row: currentRow + 1, col: currentCol });
    }
    return possibleMoves;
  }
}

module.exports = { RobotPaths };
