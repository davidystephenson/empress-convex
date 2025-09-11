import serviceContext from './serviceContext'
import CardSection from '../card/CardSection'
import type { JSX } from 'react'

export default function ServiceTrial (): JSX.Element {
  const service = serviceContext.use()
  return (
    <CardSection cards={service.game.market} label='Trial' />
  )
}
