import type { ReactNode } from "react";
import type { Doc } from "../../convex/_generated/dataModel";
import type { RelatedPlayer } from "../player/playerTypes";

export interface GameBoundaryProps {
  children: ReactNode
}
export interface GameBoundaryState {
  error?: Error
}
export interface RelatedGame extends Doc<'games'> {
  players: RelatedPlayer[]
}