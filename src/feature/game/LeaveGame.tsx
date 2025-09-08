import { ImpressedRobe } from "robes"
import authContext from "../auth/authContext"
import { api } from "../../../convex/_generated/api"
import useArchedMutation from "../arched/useArchedMutation"
import { useNavigate } from "react-router-dom"
import gameContext from "./gameContext"

export default function LeaveGame() {
  const auth = authContext.useMaybe()
  const game = gameContext.use()
  const leaveGame = useArchedMutation({ label: 'Leave Game', mutation: api.leaveGame.default })
  const navigate = useNavigate()
  console.log('auth', auth)
  const joined = game.players.some(player => player.user._id === auth.value?._id)
  if (!auth.provided || !joined) {
    console.log('joined', joined)
    return <></>
  }
  async function handleLeave() {
    await leaveGame.act({ gameId: game._id })
    await navigate('/games')
  }
  return (
    <ImpressedRobe
      error={leaveGame.error?.message}
      isLoading={leaveGame.acting}
      loading={leaveGame.acting}
      onClick={handleLeave}
      size='xs'
    >
      Leave
    </ImpressedRobe>
  )
}