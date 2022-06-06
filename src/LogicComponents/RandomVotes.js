import { getRandomBoard } from "./RandomBoard";

export function getRandomVotes(numberOfExamples) {
  return [...Array(numberOfExamples)].map((example) => ({
    boardStatus: getRandomBoard(true),
    numberOfVotes: Math.floor(Math.random() * 20),
  }));
}
