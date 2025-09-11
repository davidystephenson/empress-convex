import serviceContext from './serviceContext'
import CardSection from '../card/CardSection'

export default function ServiceTrial () {
  const service = serviceContext.use()
  return (
    <CardSection cards={service.game.market} label='Trial' />
  )
}
