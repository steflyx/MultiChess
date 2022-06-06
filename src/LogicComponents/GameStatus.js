import { computeMovements } from "./ComputeMovements";
import { getRandomBoard } from "./RandomBoard";

export class GameStatus {
  constructor(gameData) {
    //this.board = gameData.board; //12 int da 8byte (6 per ogni tipo di pezzo del nero, 6 per ogni tipo di pezzo del biano)
    this.board = getRandomBoard();
    this.nextMoveDate = gameData.nextMoveDate; //Orario in cui si terminano i voti
    this.votes = gameData.votes; //Array di Objects del tipo [{move, votes}]
  }

  getVotes() {
    return this.votes;
  }

  getBoardPosition() {
    return this.board;
  }

  resetSelection() {
    this.board.map((square) => square.resetSelection());
  }

  isOneSquareSelected() {
    return this.board.find((square) => square.isSelected) !== undefined;
  }

  getSelectedSquare() {
    return this.board.find((square) => square.isSelected);
  }

  showAvailableMoves(squareIndex) {
    this.resetSelection();
    if (this.board[squareIndex].isOccupied()) {
      this.board[squareIndex].isSelected = true;
      this.board = computeMovements(this.board, squareIndex);
    }
  }

  handleSquareClick(squareIndex) {
    const selectedSquare = this.getSelectedSquare();
    const targetSquare = this.board[squareIndex];
    if (selectedSquare !== undefined && targetSquare.isHighlighted) {
      targetSquare.changePiece(selectedSquare.piece);
      selectedSquare.changePiece(null);
      this.resetSelection();
    } else {
      this.showAvailableMoves(squareIndex);
    }
    return this.board;
  }
}
