import episodesContext from "../episode/episodesContext";
import PlayerList from "../player/PlayerList";

export default function GameController() {
  const episodes = episodesContext.use()
  if (episodes.starts.length > 0) {
    return <>Game</>
  }
  return (
    <PlayerList />
  )
}