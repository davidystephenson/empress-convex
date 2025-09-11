import gameContext from '../game/gameContext'
import serviceContext from './serviceContext'

export default function ServiceController (props: {
  children: React.ReactNode
}) {
  const game = gameContext.use()
  if (game.startingUserId == null) {
    return <>{props.children}</>
  }
  return (
    <serviceContext.Provider startingUserId={game.startingUserId}>
      {props.children}
    </serviceContext.Provider>
  )
}
