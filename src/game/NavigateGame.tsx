import { ButtonClinkRobe } from "clink-robe";
import gameContext from "./gameContext";
import type { ReactNode } from "react";

export default function NavigateGame(props: {
  children: ReactNode
}) {
  const game = gameContext.use()
  const path = `/game/${game._id}`;
  return <ButtonClinkRobe to={path} >{props.children}</ButtonClinkRobe>
}