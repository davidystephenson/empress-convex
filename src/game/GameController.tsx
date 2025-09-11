import PlayerList from "../player/PlayerList";
import ServiceConsumer from "../service/ServiceConsumer";
import serviceContext from "../service/serviceContext";
import gameContext from "./gameContext";

export default function GameController() {
  const game = gameContext.use()
  if (game.startingUserId == null) {
    return <PlayerList />
  }
  return (
    <serviceContext.Provider startingUserId={game.startingUserId}>
      <ServiceConsumer />
    </serviceContext.Provider>
  )
}