export class SquareStatus {
  constructor(isHighlighted, piece) {
    this.isHighlighted = isHighlighted;
    this.isSelected = false;
    this.piece = piece;
  }

  resetSelection() {
    this.isHighlighted = false;
    this.isSelected = false;
  }

  isOccupied() {
    return this.piece !== null;
  }

  changePiece(piece) {
    this.piece = piece;
  }
}
