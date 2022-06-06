import { useEffect, useRef, useState } from "react";
import "./CheckBoard.css";
import { Square } from "./Square";

const BORDER_SIZE = 5;

export function CheckBoard({ boardStatus, handleSquareClick, small = false }) {
  const checkboardRef = useRef();
  const [checkboardWidth, setCheckboardWidth] = useState(null);

  useEffect(() =>
    setCheckboardWidth(checkboardRef.current.offsetWidth - BORDER_SIZE * 2)
  );

  window.addEventListener("resize", () =>
    setCheckboardWidth(checkboardRef.current.offsetWidth - BORDER_SIZE * 2)
  );

  function computeSquareColor(squarePosition) {
    const rowNumber = Math.floor(squarePosition / 8);
    const columnNumber = squarePosition % 8;
    return (rowNumber % 2 === 0 && columnNumber % 2 === 0) ||
      (rowNumber % 2 === 1 && columnNumber % 2 === 1)
      ? "white"
      : "black";
  }

  return (
    <div
      className={`checkboard ${small ? "small" : ""}`}
      ref={checkboardRef}
      style={{
        border: `solid ${BORDER_SIZE}px white`,
        paddingBottom: checkboardWidth,
      }}
    >
      {boardStatus.map((squareStatus, i) => (
        <Square
          squareStatus={squareStatus}
          onClick={small ? null : () => handleSquareClick(i)}
          squareSize={checkboardWidth / 8}
          squareColor={computeSquareColor(i)}
          key={i}
        />
      ))}
    </div>
  );
}
