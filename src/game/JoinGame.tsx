import { ImpressedRobe } from 'robes'
import authContext from '../auth/authContext'
import { api } from '../../convex/_generated/api'
import useArchedMutation from '../arched/useArchedMutation'
import { useNavigate } from 'react-router-dom'
import gameContext from './gameContext'
import type { JSX } from 'react'

export default function JoinGame (): JSX.Element {
  const auth = authContext.useMaybe()
  const game = gameContext.use()
  const joinGame = useArchedMutation({ label: 'Join Game', mutation: api.joinGame.default })
  const navigate = useNavigate()
  const joined = game.players.some(player => player.user._id === auth.value?._id)
  if (!auth.provided || joined || game.startingUserId != null) {
    return <></>
  }
  const path = `/game/${game._id}`
  async function join (): Promise<void> {
    await joinGame.act({ gameId: game._id })
    await navigate(path)
  }
  return (
    <ImpressedRobe
      error={joinGame.error?.message}
      isLoading={joinGame.acting}
      loading={joinGame.acting}
      onClick={() => { void join() }}
    >
      Join
    </ImpressedRobe>
  )
}
