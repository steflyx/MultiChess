import { ChessPiece, pieceColor, pieceTypes } from "./ChessPiece";
import { SquareStatus } from "./SquareStatus";

export function getRandomBoard(highlightSquares = false) {
  return [
    new SquareStatus(false, new ChessPiece(pieceTypes.ROCK, pieceColor.BLACK)),
    new SquareStatus(
      false,
      new ChessPiece(pieceTypes.KNIGHT, pieceColor.BLACK)
    ),
    new SquareStatus(
      false,
      new ChessPiece(pieceTypes.BISHOP, pieceColor.BLACK)
    ),
    new SquareStatus(false, new ChessPiece(pieceTypes.QUEEN, pieceColor.BLACK)),
    new SquareStatus(false, new ChessPiece(pieceTypes.KING, pieceColor.BLACK)),
    new SquareStatus(
      false,
      new ChessPiece(pieceTypes.BISHOP, pieceColor.BLACK)
    ),
    new SquareStatus(
      false,
      new ChessPiece(pieceTypes.KNIGHT, pieceColor.BLACK)
    ),
    new SquareStatus(false, new ChessPiece(pieceTypes.ROCK, pieceColor.BLACK)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.BLACK)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.BLACK)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.BLACK)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.BLACK)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.BLACK)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.BLACK)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.BLACK)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.BLACK)),
    ...[...Array(19).keys()].map((d) => new SquareStatus(false, null)),
    new SquareStatus(
      highlightSquares,
      new ChessPiece(pieceTypes.PAWN, pieceColor.WHITE)
    ),
    ...[...Array(12).keys()].map((d) => new SquareStatus(false, null)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.WHITE)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.WHITE)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.WHITE)),
    new SquareStatus(highlightSquares, null),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.WHITE)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.WHITE)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.WHITE)),
    new SquareStatus(false, new ChessPiece(pieceTypes.PAWN, pieceColor.WHITE)),
    new SquareStatus(false, new ChessPiece(pieceTypes.ROCK, pieceColor.WHITE)),
    new SquareStatus(
      false,
      new ChessPiece(pieceTypes.KNIGHT, pieceColor.WHITE)
    ),
    new SquareStatus(
      false,
      new ChessPiece(pieceTypes.BISHOP, pieceColor.WHITE)
    ),
    new SquareStatus(false, new ChessPiece(pieceTypes.QUEEN, pieceColor.WHITE)),
    new SquareStatus(false, new ChessPiece(pieceTypes.KING, pieceColor.WHITE)),
    new SquareStatus(
      false,
      new ChessPiece(pieceTypes.BISHOP, pieceColor.WHITE)
    ),
    new SquareStatus(
      false,
      new ChessPiece(pieceTypes.KNIGHT, pieceColor.WHITE)
    ),
    new SquareStatus(false, new ChessPiece(pieceTypes.ROCK, pieceColor.WHITE)),
  ];
}
