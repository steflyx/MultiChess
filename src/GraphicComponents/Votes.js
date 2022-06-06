import { Vote } from "./Vote";

export function Votes({ votes }) {
  return (
    <>
      {votes.map((d, i) => (
        <Vote
          boardStatus={d.boardStatus}
          numberOfVotes={d.numberOfVotes}
          key={i}
        />
      ))}
    </>
  );
}
