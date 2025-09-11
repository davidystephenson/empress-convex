import contextCreator from "context-creator";
import type { RelatedGame } from "./gameTypes";

const gameContext = contextCreator({
  name: 'Game',
  useValue: (props: {
    game: RelatedGame
  }) => {
    return props.game
  }
})
export default gameContext;