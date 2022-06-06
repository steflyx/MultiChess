import { GameStatus } from "../LogicComponents/GameStatus";

export function getStatistics() {
  return { ai: 80, humans: 20 };
}

export function getGameStatus() {
  const gameStatus = new GameStatus({
    //board: [1,2,3], //Just for debugging; In final app it will be an array of 12 integers
    nextMoveDate: new Date(2022, 4, 20, 20),
    votes: [{ move: "A", votes: 20 }],
  });

  return gameStatus;
}
