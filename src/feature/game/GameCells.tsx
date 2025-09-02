import { Td } from "@chakra-ui/react";
import type { Doc } from "../../../convex/_generated/dataModel";
import { ImpressedActorRobe, ImpressedRobe } from "robes";
import ClinkRobe from "clink-robe";
import { api } from "../../../convex/_generated/api";
import useArchedMutation from "../arched/useArchedMutation";
import { useNavigate } from "react-router-dom";

export default function GameCells (props: {
  row: Doc<'games'>
}) {
  const joinGame = useArchedMutation({ label: 'Join Game', mutation: api.joinGame.default })
  const navigate = useNavigate()
  const path = `/game/${props.row.name}`;
  async function handleJoin () {
    await joinGame.act({ gameId: props.row._id })
    await navigate(path)
  }
  return (
    <>
      <Td>
        <ClinkRobe to={path}>{props.row.name}</ClinkRobe>
      </Td>
      <Td>
        <ImpressedRobe
          error={joinGame.error?.message}
          isLoading={joinGame.acting}
          loading={joinGame.acting}
          onClick={handleJoin}
          size='xs'
        >
          Join
        </ImpressedRobe>
      </Td>
    </>
  )
}