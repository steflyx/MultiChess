import { useEffect, useState } from "react";
import { CheckBoard } from "../GraphicComponents/CheckBoard";
import { Clock } from "../GraphicComponents/Clock";
import { Votes } from "../GraphicComponents/Votes";
import { getRandomVotes } from "../LogicComponents/RandomVotes";
import "./Game.css";

export function Game({ gameStatus, timeOver }) {
  const [boardStatus, setBoardStatus] = useState(gameStatus.getBoardPosition());
  const [isGameActive, setIsGameActive] = useState(false);
  const votes = getRandomVotes(6);

  useEffect(() => setIsGameActive(true));

  return (
    <main className="page-wrapper">
      <section className="game-wrapper">
        <div className="clock-container">
          <Clock
            nextMoveDate={gameStatus.nextMoveDate}
            timeOver={() => timeOver()}
          />
        </div>
        <div className="checkboard-container">
          <CheckBoard
            boardStatus={boardStatus}
            handleSquareClick={(squareIndex) => {
              if (isGameActive) {
                setBoardStatus((oldBoard) => [
                  ...gameStatus.handleSquareClick(squareIndex),
                ]);
              }
            }}
          />
        </div>
        <div className="votes-container">
          <Votes votes={votes} />
        </div>
      </section>
    </main>
  );
}
