import "./Vote.css";
import { CheckBoard } from "./CheckBoard";

export function Vote({ boardStatus, numberOfVotes }) {
  return (
    <div className="vote">
      <CheckBoard
        boardStatus={boardStatus}
        numberOfVotes={numberOfVotes}
        small={true}
      />
      <h3>Votes: {numberOfVotes}</h3>
    </div>
  );
}
