import serviceContext from './serviceContext'
import CardSection from '../card/CardSection'
import type { JSX } from 'react'

export default function ServiceDungeon (): JSX.Element {
  const service = serviceContext.use()
  return (
    <CardSection cards={service.game.archive} label='Dungeon' />
  )
}
