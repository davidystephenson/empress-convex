import { ButtonRobe } from 'robes'
import { api } from '../../convex/_generated/api'
import useArchedMutation from '../arched/useArchedMutation'
import gameContext from './gameContext'
import type { JSX } from 'react'

export default function StartGame (): JSX.Element {
  const game = gameContext.use()
  const startGame = useArchedMutation({ label: 'Start Game', mutation: api.startGame.default })
  if (game.startingUserId != null || game.players.length < 2) {
    return <></>
  }
  function handleStart (): void {
    void startGame.act({ gameId: game._id })
  }
  return (
    <ButtonRobe onClick={handleStart}>
      Start
    </ButtonRobe>
  )
}
