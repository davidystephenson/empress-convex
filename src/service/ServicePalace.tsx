import RangeController from '../range/RangeController'
import CardSection from '../card/CardSection'
import serviceContext from './serviceContext'
import type { JSX } from 'react'

export default function ServicePalace (): JSX.Element {
  const service = serviceContext.use()
  return (
    <CardSection cards={service.game.center} label='Palace'>
      <RangeController />
    </CardSection>
  )
}
