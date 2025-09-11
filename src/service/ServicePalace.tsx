import RangeController from '../range/RangeController'
import CardSection from '../card/CardSection'
import serviceContext from './serviceContext'

export default function ServicePalace () {
  const service = serviceContext.use()
  return (
    <CardSection cards={service.game.center} label='Palace'>
      <RangeController />
    </CardSection>
  )
}
