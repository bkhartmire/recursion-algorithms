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
  constructor(size) {
    this.board = new Board(size);
    this.grid = this.board.board;
    this.row = 0;
    this.col = 0;
  }

  solve() {
    let result = 0;
    const robotPath = this;

    function recurse(row, col) {
      let finishedPath = false;
      if (row === robotPath.grid.length - 1 && col === row) {
        result++;
        finishedPath = true;
      }
      if (!finishedPath) {
        up(row, col);
        down(row, col);
        left(row, col);
        right(row, col);
      }
      robotPath.board.togglePiece(row, col);
    }

    function up(currentRow, currentCol) {
      if (
        currentRow > 0 &&
        !robotPath.board.hasBeenVisited(currentRow - 1, currentCol)
      ) {
        robotPath.board.togglePiece(currentRow - 1, currentCol);
        recurse(currentRow - 1, currentCol);
      }
    }

    function down(currentRow, currentCol) {
      if (
        currentRow < robotPath.grid.length - 1 &&
        !robotPath.board.hasBeenVisited(currentRow + 1, currentCol)
      ) {
        robotPath.board.togglePiece(currentRow + 1, currentCol);
        recurse(currentRow + 1, currentCol);
      }
    }

    function right(currentRow, currentCol) {
      if (
        currentCol < robotPath.grid.length - 1 &&
        !robotPath.board.hasBeenVisited(currentRow, currentCol + 1)
      ) {
        robotPath.board.togglePiece(currentRow, currentCol + 1);
        recurse(currentRow, currentCol + 1);
      }
    }

    function left(currentRow, currentCol) {
      if (
        currentCol > 0 &&
        !robotPath.board.hasBeenVisited(currentRow, currentCol - 1)
      ) {
        robotPath.board.togglePiece(currentRow, currentCol - 1);
        recurse(currentRow, currentCol - 1);
      }
    }
    this.board.togglePiece(this.row, this.col);
    recurse(this.row, this.col);
    return result;
  }
}

module.exports = { RobotPaths };
