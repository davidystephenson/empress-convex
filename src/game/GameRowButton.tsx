import authContext from '../auth/authContext'
import gameContext from './gameContext'
import JoinGame from './JoinGame'
import NavigateGame from './NavigateGame'

export default function GameRowButton () {
  const auth = authContext.useMaybe()
  const game = gameContext.use()
  if (!auth.provided) {
    return <NavigateGame>Observe</NavigateGame>
  }
  const joined = game.players.some(player => player.user._id === auth.value._id)
  if (joined) {
    return <NavigateGame>Return</NavigateGame>
  }
  if (game.startingUserId != null) {
    return <NavigateGame>Observe</NavigateGame>
  }
  return <JoinGame />
}
