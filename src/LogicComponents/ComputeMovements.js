import { pieceColor, pieceTypes } from "./ChessPiece";

const functions = {};
functions[pieceTypes.KING] = computeMovementsKing;
functions[pieceTypes.QUEEN] = computeMovementsQueen;
functions[pieceTypes.BISHOP] = computeMovementsBishop;
functions[pieceTypes.KNIGHT] = computeMovementsKnight;
functions[pieceTypes.ROCK] = computeMovementsRock;
functions[pieceTypes.PAWN] = computeMovementsPawn;

export function computeMovements(board, selectedPieceIndex) {
  const selectedPiece = board[selectedPieceIndex].piece;

  const possibleMovements = functions[selectedPiece.type](
    board,
    selectedPieceIndex,
    selectedPiece.color
  );
  possibleMovements.map((d) => (board[d].isHighlighted = true));

  return board;
}

function computeRow(index) {
  return Math.floor(index / 8);
}

function computeColumn(index) {
  return index % 8;
}

function squareAbove(index) {
  return index === null || index < 8 ? null : index - 8;
}

function squareBelow(index) {
  return index === null || index >= 56 ? null : index + 8;
}

function squareLeft(index) {
  return index === null || index < 1 ? null : index - 1;
}

function squareRight(index) {
  return index === null || index > 62 ? null : index + 1;
}

function squareDiagAboveLeft(index) {
  return squareLeft(squareAbove(index));
}

function squareDiagAboveRight(index) {
  return squareRight(squareAbove(index));
}

function squareDiagBelowLeft(index) {
  return squareLeft(squareBelow(index));
}

function squareDiagBelowRight(index) {
  return squareRight(squareBelow(index));
}

function computeMovementsKing(board, index, color) {
  return [
    squareAbove(index),
    squareDiagAboveRight(index),
    squareRight(index),
    squareDiagBelowRight(index),
    squareBelow(index),
    squareDiagBelowLeft(index),
    squareLeft(index),
    squareDiagAboveLeft(index),
  ].filter(
    (d) =>
      d !== null && (!board[d].isOccupied() || board[d].piece.color !== color)
  );
}

function computeMovementsQueen(board, index, color) {
  return [
    ...computeMovementsBishop(board, index, color),
    ...computeMovementsRock(board, index, color),
  ];
}

function computeMovementsBishop(board, index, color) {
  const column = computeColumn(index);
  const movementsAboveRight = [...Array(7 - column).keys()]
    .map((d) => index - (d + 1) * 7)
    .filter((d) => d > 0);
  const movementsAboveLeft = [...Array(column).keys()]
    .map((d) => index - (d + 1) * 9)
    .filter((d) => d >= 0);
  const movementsBelowRight = [...Array(7 - column).keys()]
    .map((d) => index + (d + 1) * 9)
    .filter((d) => d <= 63);
  const movementsBelowLeft = [...Array(column).keys()]
    .map((d) => index + (d + 1) * 7)
    .filter((d) => d <= 63);

  const movements = [
    movementsAboveRight,
    movementsAboveLeft,
    movementsBelowRight,
    movementsBelowLeft,
  ].map((movementsDir) => {
    const firstOccupied = movementsDir.findIndex((square) =>
      board[square].isOccupied()
    );
    return firstOccupied === -1
      ? movementsDir
      : movementsDir.slice(
          0,
          board[movementsDir[firstOccupied]].piece.color !== color
            ? firstOccupied + 1
            : firstOccupied
        );
  });

  return movements.flat();
}

function computeMovementsKnight(board, index, color) {
  const column = computeColumn(index);

  const movementsRight = [
    squareRight(squareAbove(squareAbove(index))),
    squareAbove(squareRight(squareRight(index))),
    squareBelow(squareRight(squareRight(index))),
    squareRight(squareBelow(squareBelow(index))),
  ].filter((d) => computeColumn(d) > column);

  const movementsLeft = [
    squareLeft(squareAbove(squareAbove(index))),
    squareLeft(squareBelow(squareBelow(index))),
    squareAbove(squareLeft(squareLeft(index))),
    squareBelow(squareLeft(squareLeft(index))),
  ].filter((d) => computeColumn(d) < column);

  return [...movementsRight, ...movementsLeft].filter(
    (d) =>
      d !== null && (!board[d].isOccupied() || board[d].piece.color !== color)
  );
}

function computeMovementsRock(board, index, color) {
  const row = computeRow(index);
  const movementsForward = [...Array(7).keys()]
    .map((d) => index - (d + 1) * 8)
    .filter((d) => d >= 0);
  const movementsBackward = [...Array(7).keys()]
    .map((d) => index + (d + 1) * 8)
    .filter((d) => d <= 63);
  const movementsRight = [...Array(7).keys()]
    .map((d) => index + d)
    .filter((d) => computeRow(d) === row);
  const movementsLeft = [...Array(7).keys()]
    .map((d) => index - d)
    .filter((d) => computeRow(d) === row);

  const movements = [
    movementsForward,
    movementsBackward,
    movementsRight,
    movementsLeft,
  ].map((movementsDir) => {
    const firstOccupied = movementsDir.findIndex((square) =>
      board[square].isOccupied()
    );
    return firstOccupied === -1
      ? movementsDir
      : movementsDir.slice(
          0,
          board[movementsDir[firstOccupied]].piece.color !== color
            ? firstOccupied + 1
            : firstOccupied
        );
  });

  return movements.flat();
}

function computeMovementsPawn(board, index, color) {
  const row = computeRow(index);
  if (color === pieceColor.WHITE) {
    const firstRow = 6;
    const movementsForward = [
      squareAbove(index),
      row === firstRow ? squareAbove(squareAbove(index)) : null,
    ].filter((d) => d !== null && !board[d].isOccupied());
    const eatDiagonal = [
      squareDiagAboveLeft(index),
      squareDiagAboveRight(index),
    ].filter(
      (d) =>
        d !== null && board[d].isOccupied() && board[d].piece.color !== color
    );

    return [...movementsForward, ...eatDiagonal];
  }
  if (color === pieceColor.BLACK) {
    const firstRow = 1;
    const movementsForward = [
      squareBelow(index),
      row === firstRow ? squareBelow(squareBelow(index)) : null,
    ].filter((d) => d !== null && !board[d].isOccupied());
    const eatDiagonal = [
      squareDiagBelowLeft(index),
      squareDiagBelowRight(index),
    ].filter(
      (d) =>
        d !== null && board[d].isOccupied() && board[d].piece.color !== color
    );

    return [...movementsForward, ...eatDiagonal];
  }
}
