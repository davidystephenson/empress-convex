import { ImpressedActorRobe } from "robes"
import authContext from "../auth/authContext"
import { api } from "../../convex/_generated/api"
import useArchedMutation from "../arched/useArchedMutation"

export default function CreateGame () {
  const auth = authContext.useMaybe()
  const createGame = useArchedMutation({ label: 'Create Game', mutation: api.createGame.default })
  if (!auth.provided) {
    return <></>
  }
  return <ImpressedActorRobe size='xs' actor={createGame} input={{}}>Create</ImpressedActorRobe>
}