import { FaStar } from "react-icons/fa6"
import serviceContext from "../service/serviceContext"

export default function RangeFinalIcon () {
  const service = serviceContext.use()
  if (!service.game.final) {
    return <></>
  }
  return <FaStar />
}