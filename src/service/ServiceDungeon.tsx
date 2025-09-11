import serviceContext from "./serviceContext"
import CardSection from "../card/CardSection"

export default function ServiceDungeon() {
  const service = serviceContext.use()
  return (
    <CardSection cards={service.game.archive} label="Dungeon" />
  )
}