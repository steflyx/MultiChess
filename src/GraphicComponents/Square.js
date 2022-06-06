import "./Square.css";

export function Square({ squareStatus, onClick, squareSize, squareColor }) {
  function colorSquare(squareStatus) {
    if (squareStatus.isSelected) {
      return (
        <div className="selected-square">
          {squareStatus.piece.draw(squareColor === "white")}
        </div>
      );
    }
    if (squareStatus.isHighlighted) {
      return (
        <div
          className={
            squareStatus.isOccupied() ? "eatable-square" : "highlighted-square"
          }
        >
          {squareStatus.isOccupied()
            ? squareStatus.piece.draw(squareColor === "white")
            : ""}
        </div>
      );
    }
    if (!squareStatus.isHighlighted && !squareStatus.isSelected) {
      return squareStatus.isOccupied()
        ? squareStatus.piece.draw(squareColor === "white")
        : "";
    }
  }

  return (
    <div
      className={"square " + squareColor}
      style={{ height: squareSize === null ? 80 : squareSize }}
      onMouseUp={() => onClick()}
    >
      {colorSquare(squareStatus)}
    </div>
  );
}
