import { Td } from '@chakra-ui/react'
import type { RelatedPlayer } from './playerTypes'
import LeaveGame from '../game/LeaveGame'

export default function PlayerCells (props: {
  row: RelatedPlayer
}) {
  return (
    <>
      <Td>
        {props.row.user.name}
      </Td>
      <Td>
        <LeaveGame />
      </Td>
    </>
  )
}
