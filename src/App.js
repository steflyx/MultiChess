import { useState } from "react";
import { getGameStatus, getStatistics } from "./BackEndConnector/BackEnd";
import { LandingPage, Game } from "./Pages/Pages";

function App() {
  const [isEntered, setIsEntered] = useState(false);
  const gameStatus = getGameStatus();

  function timeOver() {
    //Hide User Checkboard
    //Show winning move
    //Wait next move
    //Update game
    //Show User Checkboard
  }

  if (!isEntered) {
    return (
      <LandingPage setIsEntered={setIsEntered} victories={getStatistics()} />
    );
  }

  return <Game gameStatus={gameStatus} timeOver={() => timeOver()} />;
}

export default App;
