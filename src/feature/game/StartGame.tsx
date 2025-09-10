import { ButtonRobe } from "robes";
import { api } from "../../../convex/_generated/api";
import useArchedMutation from "../arched/useArchedMutation";
import gameContext from "./gameContext";
import episodesContext from "../episode/episodesContext";

export default function StartGame() {
  const episodes = episodesContext.use()
  const game = gameContext.use()
  const startGame = useArchedMutation({ label: 'Start Game', mutation: api.startGame.default })
  if (episodes.starts.length > 0 || game.players.length < 2) {
    return <></>
  }
  function handleStart() {
    startGame.act({ gameId: game._id })
  }
  return (
    <ButtonRobe onClick={handleStart}>
      Start
    </ButtonRobe>
  )
}