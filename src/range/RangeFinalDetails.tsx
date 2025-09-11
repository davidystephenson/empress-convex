import serviceContext from "../service/serviceContext"
import { Text } from "@chakra-ui/react"

export default function RangeFinalDetails () {
  const service = serviceContext.use()
  const ready = service.game.profiles.every(profile => profile.playReady)
  if (ready) {
    return <Text>The game is over.</Text>
  }
  return <Text>This is the final play.</Text>
}