import { Td } from '@chakra-ui/react'
import type { RelatedPlayer } from './playerTypes'
import LeaveGame from '../game/LeaveGame'
import type { JSX } from 'react'

export default function PlayerCells (props: {
  row: RelatedPlayer
}): JSX.Element {
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
