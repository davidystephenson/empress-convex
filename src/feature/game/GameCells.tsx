import { Td } from "@chakra-ui/react";
import type { Doc } from "../../../convex/_generated/dataModel";
import { ButtonRobe } from "robes";
import ClinkRobe from "clink-robe";

export default function GameCells (props: {
  row: Doc<'games'>
}) {
  const path = `/game/${props.row.name}`;
  return (
    <>
      <Td>
        <ClinkRobe to={path}>{props.row.name}</ClinkRobe>
      </Td>
      <Td>
        <ButtonRobe size='xs'>
          Join
        </ButtonRobe>
      </Td>
    </>
  )
}