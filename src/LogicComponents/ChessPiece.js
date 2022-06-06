import { BishopIcon } from "../icons/ChessPieces/Bishop";
import { KingIcon } from "../icons/ChessPieces/King";
import { KnightIcon } from "../icons/ChessPieces/Knight";
import { PawnIcon } from "../icons/ChessPieces/Pawn";
import { QueenIcon } from "../icons/ChessPieces/Queen";
import { RockIcon } from "../icons/ChessPieces/Rock";

export const pieceTypes = {
  ROCK: "ROCK",
  KNIGHT: "KNIGHT",
  BISHOP: "BISHOP",
  QUEEN: "QUEEN",
  KING: "KING",
  PAWN: "PAWN",
};

export const pieceColor = {
  WHITE: 1,
  BLACK: 2,
};

const graphicTypes = {
  ROCK: RockIcon,
  BISHOP: BishopIcon,
  KNIGHT: KnightIcon,
  QUEEN: QueenIcon,
  KING: KingIcon,
  PAWN: PawnIcon,
};

export class ChessPiece {
  constructor(type, color, position) {
    this.type = type;
    this.color = color;
    this.position = position;
  }

  movesAvailable(boardStatus) {}

  draw(isBackgroundWhite) {
    const GraphicPieceComponent = graphicTypes[this.type];
    return (
      <GraphicPieceComponent
        isWhite={this.color === pieceColor.WHITE}
        isBackgroundWhite={isBackgroundWhite}
      />
    );
  }

  text() {
    if (this.type === pieceTypes.ROCK) {
      return "Rock";
    }
    if (this.type === pieceTypes.BISHOP) {
      return "Bishop";
    }
    if (this.type === pieceTypes.KNIGHT) {
      return "Knight";
    }
    if (this.type === pieceTypes.QUEEN) {
      return "Queen";
    }
    if (this.type === pieceTypes.KING) {
      return "King";
    }
    if (this.type === pieceTypes.PAWN) {
      return "Pawn";
    }
  }
}
