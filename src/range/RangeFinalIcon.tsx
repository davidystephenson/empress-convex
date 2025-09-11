import { FaStar } from 'react-icons/fa6'
import serviceContext from '../service/serviceContext'
import type { JSX } from 'react'

export default function RangeFinalIcon (): JSX.Element {
  const service = serviceContext.use()
  if (!service.game.final) {
    return <></>
  }
  return <FaStar />
}
