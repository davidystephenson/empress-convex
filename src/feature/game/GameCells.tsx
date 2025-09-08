import { Td } from "@chakra-ui/react";
import ClinkRobe from "clink-robe";
import gameContext from "./gameContext";
import type { RelatedGame } from "./gameTypes";
import GameRowButton from "./GameRowButton";

export default function GameCells (props: {
  row: RelatedGame
}) {
  const path = `/game/${props.row._id}`;
  return (
    <gameContext.Provider game={props.row}>
      <Td>
        <ClinkRobe to={path}>{props.row.name}</ClinkRobe>
      </Td>
      <Td>
        <GameRowButton />
      </Td>
    </gameContext.Provider>
  )
}